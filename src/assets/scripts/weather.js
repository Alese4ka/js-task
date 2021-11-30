let geoCity = document.querySelector('#result');
let city;

ymaps.ready(init);

function init() {
    ymaps.geolocation.get({
    provider:'yandex'
})
.then(function(result){
    let components = result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.Address.Components;
    //geoCity.innerHTML = `${components[2].name}`;
    city=`${components[2].name}`;
    geoCity.innerHTML = city;
})
.catch(function () {
    //Обрабатываем ошибки
});
}
console.log(city)
fetch('http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ea7f2ec7419b33064accc22aac5169a6')
.then(function (resp) {return resp.json()})
.then(function (data) {
    document.querySelector('.weather__city').innerHTML = data.name;
    document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.weather__info').textContent = data.weather[0]['description'];
    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
.catch(function () {
    //Обрабатываем ошибки
});
