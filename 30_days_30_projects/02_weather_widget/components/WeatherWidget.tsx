"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { WeatherData } from "./Interface";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CloudIcon, MapPinIcon, ThermometerIcon, Watch, Wind } from "lucide-react";
import {
  getTemperatureMessage,
  getWeatherMessage,
  getLocationMessage,
  getWindMessage,
  getPressureMessage,
  getHumidityMessage,
  getSeaLevelMessage,
  getCoordinatesMessage,
} from "./WeatherProperties";
import { WiHumidity } from "react-icons/wi";

// Default export of the WeatherWidgetComponent function
export default function WeatherWidget() {
  // State hooks for managing location input, weather data, error messages, and loading state
  const [location, setLocation] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to handle the search form submission
  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedLocation = location.trim();
    if (trimmedLocation === "") {
      setError("Please enter a valid location"); // Set error message if location input is empty
      setWeather(null); // Clear previous weather data
      return;
    }
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous error messages

    try {
      // Fetch weather data from the weather API
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
      const response = await fetch(
        `${apiURL}+${trimmedLocation}+&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      const weatherData: WeatherData = {
        temperature: Math.round(data.main.temp), // Get temperature in Celsius
        description: data.weather[0].description, // Get weather description
        location: data.name, // Get location name
        unit: "C", // Unit for temperature
        wind: {
          speed: data.wind.speed, // Get wind speed
          deg: data.wind.deg, // Get wind direction
        },
        pressure: data.main.pressure, // Get atmospheric pressure
        humidity: data.main.humidity, // Get humidity
        sea_level: data.main.sea_level, // Get sea level pressure
        longitute: data.coord.lon, // Get longitude
        latitude: data.coord.lat, // Get latitude
        icon: data.weather[0].icon, // Extract icon code here
        country: data.sys.country, // Get country code
      };
      setWeather(weatherData); // Set the fetched weather data
    } catch (error) {
      console.log("Error fetching weather data:", error);
      setError("City not found!. Please try again"); // Set error message
      setWeather(null); // Clear previous weather data
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-green-800 to-blue-900 flex items-center justify-center p-6">
        <div className="bg-white bg-opacity-10 rounded-2xl shadow-2xl backdrop-blur-lg p-8 w-full max-w-4xl h-auto">
          {/* App Title */}
          <h1 className="text-center text-4xl font-bold text-white mb-8">
            Weather Forecast
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex justify-center mb-8">
            <Input
              type="text"
              placeholder="Enter city name..."
              value={location}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLocation(e.target.value)
              }
              className="w-full max-w-lg px-4 py-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="md:px-6 md:py-3 rounded-r-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-200 px-3 py-1"
            >
              {isLoading ? "Loading..." : "Search"}
            </Button>
          </form>

          {/* Error Message */}
          {error && (
            <div className="text-center text-red-500 font-medium mb-6">
              {error}
            </div>
          )}

          {/* Weather Details */}
          {weather && (
            <div className="flex flex-col items-center gap-8">
              {/* Left Section: Location & Icon */}
              <div className="">
                <div className="flex items-center justify-center">
                    <h1 className="sm:text-6xl text-4xl font-bold text-white text-center">{weather.temperature} &#xb0;C</h1>
                </div>
                <div className="flex items-center justify-center gap-6 flex-col md:flex-row">
                    <div>
                        <img
                        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        alt={weather.description}
                        title={weather.description}
                        className="w-28 h-28 filter brightness-0 invert"
                        onError={(e) => {
                            e.currentTarget.src = "/fallback-icon.png";
                        }}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <h3 className="text-white text-2xl font-semibold">{getWeatherMessage(weather.description).toLocaleUpperCase()}</h3>
                    </div>
                    
                </div>
                <div className="mt-5">
                    <h2 className="text-3xl font-bold text-white text-center">
                        {weather.location}
                    </h2>
                    <h3 className="text-xl font-semibold text-white text-center">
                        {weather.country}
                    </h3>
                </div>
              </div>

              {/* Right Section: Weather Properties */}
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 text-white">
                <div className="flex flex-col gap-4">
                    <span className="flex justify-center items-center" title="Temperature"><ThermometerIcon className="w-10 h-10 text-red-300 "/></span>
                    <span className="text-center text-[22px] font-medium">{getTemperatureMessage(weather.temperature, weather.unit)}</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="flex justify-center items-center" title="Wind"><Wind className="w-10 h-10 text-gray-300" /></span>
                  <span className="text-center text-[22px] font-medium">{getWindMessage(weather.wind.speed, weather.wind.deg)}</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="flex justify-center items-center" title="Pressure"><CloudIcon className="w-10 h-10 text-blue-200" /></span>
                  <span className="text-center text-[22px] font-medium">{getPressureMessage(weather.pressure)}</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="flex justify-center items-center" title="Humidity"><WiHumidity className="w-10 h-10 text-blue-400" /></span>
                  <span className="text-center text-[22px] font-medium">{getHumidityMessage(weather.humidity)}</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="flex justify-center items-center" title="Sea Level"><img src="/sealevel.png" alt="image" className="w-10 h-10"/></span>
                  <span className="text-center text-[22px] font-medium">{getSeaLevelMessage(weather.sea_level)}</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="flex justify-center items-center" title="Coordinate"><MapPinIcon className="w-10 h-10 text-green-300" /></span>
                  <span className="text-center text-[22px] font-medium">{getCoordinatesMessage(weather.latitude, weather.longitute)}</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="flex justify-center items-center" title="Day or Night"><Watch className="w-10 h-10 text-yellow-300" /></span>
                  <span className="text-center text-[22px] font-medium">{getLocationMessage(weather.location)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
