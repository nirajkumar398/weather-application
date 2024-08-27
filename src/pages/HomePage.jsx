import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { fetchWeatherData } from "../services";
import { getFormattedData } from "../utils";

const HomePage = ({ setHistory }) => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDaysData, setWeatherDaysData] = useState(null);

  const handleSearch = async () => {
    if (!city) return;
    const data = await fetchWeatherData(city);
    if (!data || !data.list || data.list.length === 0) {
        alert("No data is found");
        return;
    }
    setWeatherData(data);
    setWeatherDaysData(getFormattedData(data));
    const newData = {
      city: city,
      temp: Math.floor(data.list[0]?.main.temp / 10),
      date: new Date(data?.list[0]?.dt_txt).toDateString(),
      id: Date.now(),
    };
    setHistory((prevH) => [newData, ...prevH]);
    setCity("");
  };

  const dayTime = new Date().toDateString("en-us");
  return (
    <div className="home-container">
      <h1>Weather </h1>
      <div className="input-wrap">
        <input
          placeholder="City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch} className="button">
          Search
        </button>
        <Link to={"/weather-application/history"} className="button">
          History
        </Link>
      </div>

      {weatherDaysData && (
        <div>
          <h2>{`${weatherData?.city?.name} , ${weatherData?.city?.country}`}</h2>
          <h3>{dayTime}</h3>
          <h3>{weatherData?.list[0]?.weather[0]?.description}</h3>
          <h2>{Math.floor(weatherData?.list[0]?.main.temp) / 10} °C</h2>

          <div className="weather-list">
            {Object.keys(weatherDaysData || {}).length > 0 &&
              Object.keys(weatherDaysData).map((weather, index) => (
                <div key={index} className="weather-item">
                  <div>{weather}</div>
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherDaysData[weather][0]?.weather[0]?.icon}@2x.png`}
                  />
                  <div>
                    {`${Math.floor(
                      weatherDaysData[weather][0].main.temp_max / 10
                    )} ° | ${Math.floor(
                      weatherDaysData[weather][0].main.temp_max / 10
                    )} °`}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
