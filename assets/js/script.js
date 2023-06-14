

document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const cityInput = document.getElementById('cityInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherInfo = document.getElementById('weatherInfo');
    let image = document.getElementById('image');
  
    openModalBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  
    getWeatherBtn.addEventListener('click', function() {
      // Code pour effectuer la requête API et afficher les informations météo dans le modal
      const apiKey = 'a677663aa15eb11e550c2ffc3d51586a';
      const city = cityInput.value;
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`)
        .then(response => response.json())
        .then(data => {
          // Traitez les données météorologiques ici
          console.log(data);
          const temperature = data.main.humidity;
          const description = data.weather[0].description;
          weatherInfo.textContent = `Il fait actuellement ${temperature} degrés Celsius`;
          if(data.weather.main=='Rain'){
            image.src='assets/js/cloud.png';
          }
          else if(data.weather.main=='Cloud'){
            image.src='assets/js/cloud.png';
          }
          else if(data.weather.main=='Clear'){
            image.src='assets/js/cloud.png';
          }
          else if(data.weather.main=='Mist'){
            image.src='assets/js/cloud.png';
          }
          else{
            image.src='assets/js/cloud.png';
          }
        })
        .catch(error => {
          // Gérez les erreurs ici
          console.error(error);
          weatherInfo.textContent = 'Une erreur s\'est produite lors de la récupération des informations météo.';
        });
    });
  });


let moon = document.getElementById('moon');
let body = document.getElementById('body');
let main = document.getElementById('main');
moon.addEventListener('click',e =>{
  e.preventDefault();
  main.style.backgroundColor = '#333';
})
