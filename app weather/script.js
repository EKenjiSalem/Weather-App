 const main = document.getElementById('main');  
 const form = document.getElementById('form');  
 const search = document.getElementById('search');  
 const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;  

 const apiKey = "6121b40ebfc005dab981bce0fcfe0930";  

 async function getWeatherByLocation(city) {  

      const resp = await fetch(url(city), {  
        origin: "cros" });  

      const respData = await resp.json();  
       getWeather(respData);  
    }  

     getWeather = (data) => {  
      const temp = newTemp(data.main.temp);  
      const weather = document.createElement('div')  
      weather.classList.add('weather');  
      weather.innerHTML = `  
      <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> 
      ${temp}°F <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      </h2>  
      <small>${data.weather[0].main}</small>  
      `;  

     //  cleanup   
      main.innerHTML = "";  
       main.appendChild(weather);  
    };  
    function newTemp(temp){  
      return Math.floor((temp - 273.15) * 9/5) + 32;
      
      // return Math.floor(temp - 273.15);  
    }  

    form.addEventListener('submit',(e) => {  
     e.preventDefault();  
     const city = search.value;  
     if (city) {  
       getWeatherByLocation(city)  
     }  
    });  

