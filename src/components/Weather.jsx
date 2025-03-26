import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [inputValue, setInputValue] = useState(city);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      setCity(inputValue);
      setInputValue("");
    }
  };

  const getWeatherIcon = (weatherType) => {
    switch (weatherType) {
      case "Clear":
        return <i className="fa-regular fa-sun text-yellow-400 text-[7rem]"></i>;
      case "Clouds":
        return <i className="fa-solid fa-cloud text-[6rem] text-blue-800"></i>;
      case "Rain":
        return (
          <i className="fa-solid fa-cloud-showers-heavy text-blue-100 text-[7rem]"></i>
        );
      case "Thunderstorm":
        return <i className="fa-solid fa-bolt text-yellow-500 text-[7rem]"></i>;
      case "Snow":
        return <i className="fa-solid fa-snowflake text-blue-100 text-[7rem]"></i>;
      case "Haze":
      case "Mist":
        return <i className="fa-solid fa-smog text-gray-100 text-[7rem]"></i>;
      default:
        return <i className="fa-solid fa-cloud text-gray-100 text-[7rem]"></i>;
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=f878ff76adac16c6abc124f52b2e6793`
        );
        const data = await response.json();

        if (data.cod === 200) {
          setWeather(data);
        } else {
          setWeather(null);
          console.error("City not found");
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  return (
    <div className="weather max-w-full  rounded-xl flex justify-center items-center  ">
      <div className="weather-content flex flex-col gap-9 lg:w-[250px] w-full h-auto ">
        <div className="location flex gap-7 items-center">
          <i className="fa-solid fa-location-dot text-[2rem] text-gray-800"></i>
          <p className="text-[3rem] font-bold text-gray-800">{weather?.name || "City"}</p>
        </div>
        <div className="search lg:gap-8 gap-20 flex content-center items-center">
          <input
            className="text-[1.7rem] lg:text-[1.9rem] border-b-[1px] border-zinc-600 w-full h-9"
            type="text"
            placeholder="Enter location"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass text-2xl text-gray-900 "></i>
          </button>
        </div>
        <div className="w-data flex flex-col justify-center content-center items-center gap-1 xl:gap-3">
          {weather?.weather?.[0]?.main &&
            getWeatherIcon(weather.weather[0].main)}
          <div className="text-[2rem] text-white">
            {weather?.weather?.[0]?.main || "N/A"}
          </div>
          <div className="text-[2rem] text-white">
            {weather?.main?.temp ? `${Math.floor(weather.main.temp)}°C` : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
