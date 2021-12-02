let wrapper = document.querySelector('.weather');
let otherCity = document.querySelector('.weather__other-city');
let switchTemp = document.querySelector('.weather__switch-input');
let weatherCity = document.querySelector('.weather__city');
let weatherTemp = document.querySelector('.weather__temp');
let tempC = document.querySelector('.weather__temp-C');
let tempF = document.querySelector('.weather__temp-F');
let city;

ymaps.ready(init);

function init() {
    ymaps.geolocation.get({
        provider:'yandex'
    })
    .then(function(result){
        let components = result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.Address.Components;
        city = `${components[2].name}`;
        getWeather(city);
    })
    .catch(function () {
        //Обрабатываем ошибки
    });
}

wrapper.onkeyup = e => {
    if (e.key == 'Enter') {
        getWeather(otherCity.value)
    }
}

function getWeather(town) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=ea7f2ec7419b33064accc22aac5169a6`)
    .then(function (resp) {return resp.json()})
    .then(function (data) {
        document.querySelector('.weather__city').innerHTML = data.name;
        document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp - 273);
        document.querySelector('.weather__info').textContent = data.weather[0]['description'];
        document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        //Обрабатываем ошибки
    });
}

switchTemp.addEventListener('click', () => changeTemp());
let switchStatus = true;

function changeTemp() {
    if(switchStatus == true) {
        weatherTemp.innerHTML = Math.round(Number(weatherTemp.innerHTML) + 273);
        tempF.style.display = 'block';
        tempC.style.display = 'none';
        switchStatus = false;
    }
    else if(switchStatus == false) {
        weatherTemp.innerHTML = Math.round(Number(weatherTemp.innerHTML) - 273);
        tempF.style.display = 'none';
        tempC.style.display = 'block';
        switchStatus = true;
    }
}