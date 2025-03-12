
document.querySelector('button').addEventListener('click',()=>{

    const place = document.getElementById('location').value
    
    function updateTemp(data){
        const AQI = function (data) {
            let aqiIndex = data.current.air_quality["us-epa-index"] || 0;
            if (aqiIndex === 1) return "Good";
            else if (aqiIndex === 2) return "Moderate";
            else if (aqiIndex === 3) return "Unhealthy for sensitive groups";
            else if (aqiIndex === 4) return "Unhealthy";
            else if (aqiIndex === 5) return "Very Unhealthy";
            else return "Hazardous"; // Handle AQI 6+
        };

        const weather = document.getElementById('weatherInfo')
        weather.innerHTML=`Today's Temperature is ${data.current.temp_c} ° Celcious and feels like ${data.current.feelslike_c} ° Celcious`

        const other_info = document.getElementById('otherweatherInfo')
        other_info.innerHTML=`Weather condition is ${data.current.condition.text} and humidity is ${data.current.humidity} and AQi is ${AQI(data)}`
    }
    
    const prom = fetch(`https://api.weatherapi.com/v1/current.json?key=c2f9306afd9e45d99ba140148250903&q=${place}&aqi=yes`);
    prom
    .then((response)=>response.json())
    .then((data)=>updateTemp(data))

})


