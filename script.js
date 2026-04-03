async function getWeather() {
    let city = document.getElementById("city").value;
    let apiKey = "1b04a43aa1bf6cdd67dd6a50ebf821cc"; //  Put your API key

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod == 200) {
            document.getElementById("result").innerHTML = `
                <h2>${data.name}</h2>
                <p> Temp: ${data.main.temp} °C</p>
                <p> Weather: ${data.weather[0].main}</p>
                <p> Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById("result").innerHTML = `❌ ${data.message}`;
        }
    } catch (error) {
        document.getElementById("result").innerHTML = "⚠️ Error fetching data";
    }
}