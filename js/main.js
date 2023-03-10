const apiKey ='362796c485d445c694f203702231003';
const form = document.querySelector('#form');
const input = form.querySelector('#inputCity');
const header = document.querySelector('.header');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const city = input.value.trim();

    const request = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(request)
    .then((response) => response.json())
    .then((data) => {

        const html = `
            <div class="card">
            <h2 class="card-city">${data.location.name}<span>${data.location.country}</span></h2>
            <div class="card-weather">
                <div class="card-value">${data.current.temp_c}<sup>°c</sup></div>
                <img class="card-img" src= "./img/sunny.png" height="128" width="128" alt="sunny">
            </div>
            <div class="card-description">${data.current.condition.text}</div>
            </div>
        `;
        
        header.insertAdjacentHTML('afterEnd', html);


    });
});



