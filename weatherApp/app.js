const tempTitle = document.querySelector('.temp-title');
const cloudIcon = document.getElementById('cloud-image');
const cloudText = document.getElementById('text');
const him = document.getElementById('humidity');
const win = document.getElementById('wind');
const cntry = document.getElementById('country');
const place = document.getElementById('place');
const countryName = document.getElementById('country-name');
const btn = document.getElementById('btn');
const time = document.getElementById('time');
const cloudPercent = document.getElementById('cl')

async function getData(desh) {
    const myData = await fetch('http://api.weatherapi.com/v1/current.json?key=2f5666025936459187e163032220306&q=' + desh + '&aqi=yes');
    const realData = await myData.json();
    cntry.innerHTML = realData.location.country;
    place.innerHTML = realData.location.name;
    tempTitle.innerHTML = realData.current.temp_c + '℃';
    time.innerHTML = realData.location.localtime;
    cloudIcon.src = realData.current.condition.icon;
    cloudText.innerHTML = realData.current.condition.text + '.';
    him.innerHTML = "Humidity " + realData.current.humidity + '% .';
    win.innerHTML = 'Wind ' + realData.current.wind_kph + 'Kp/h';
    cloudPercent.innerHTML = 'Clouds ' + realData.current.cloud + '%';
    console.log(realData)
}

function getCountryName() {
    btn.addEventListener('click', function () {
        if (countryName.value === '') {
            getData('Bangladesh');
        } else {
            getData(countryName.value);
        }
    })
    getData('Bangladesh')
}
getCountryName();
