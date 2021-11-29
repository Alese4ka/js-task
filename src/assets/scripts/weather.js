fetch('http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=ea7f2ec7419b33064accc22aac5169a6')
    .then(function (resp) {return resp.json()})
    .then(function (data) {
        console.log(data)
        document.querySelector('.weather__city').innerHTML = data.name;
        document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
        document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        //Обрабатываем ошибки
    });