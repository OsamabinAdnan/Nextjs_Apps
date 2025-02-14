 // Function to get a temperature message based on the temperature value and unit
 export function getTemperatureMessage(temperature: number, unit: string): string {
    if (unit === "C") {
    if (temperature < 0) {
        return `It's freezing at ${temperature}°C! Bundle up!`;
    } else if (temperature < 10) {
        return `It's quite cold at ${temperature}°C. Wear warm clothes.`;
    } else if (temperature < 20) {
        return `The temperature is ${temperature}°C. Comfortable for a light jacket.`;
    } else if (temperature < 30) {
        return `It's a pleasant ${temperature}°C. Enjoy the nice weather!`;
    } else {
        return `It's hot at ${temperature}°C. Stay hydrated!`;
    }
    } else {
    // Placeholder for other temperature units (e.g., Fahrenheit)
    return `${temperature}°${unit}`;
    }
}

// Function to get a weather message based on the weather description
export function getWeatherMessage(description: string): string {
    switch (description.toLowerCase()) {
      case "sunny":
        return "It's a beautiful sunny day!";
      case "partly cloudy":
        return "Expect some clouds and sunshine.";
      case "cloudy":
        return "It's cloudy today.";
      case "overcast":
        return "The sky is overcast.";
      case "rain":
        return "Don't forget your umbrella! It's raining.";
      case "thunderstorm":
        return "Thunderstorms are expected today.";
      case "snow":
        return "Bundle up! It's snowing.";
      case "mist":
        return "It's misty outside.";
      case "fog":
        return "Be careful, there's fog outside.";
      default:
        return description; // Default to returning the description as-is
    }
}

// Function to get a location message based on the current time
export function getLocationMessage(location: string): string {
    const currentHour = new Date().getHours();
    const isNight = currentHour >= 18 || currentHour < 6; // Determine if it's night time

    return ` ${isNight ? "Night Time in" : "Day Time in"} ${location}`;
}

// Function to get a wind message based on speed and direction (in degrees)
export function getWindMessage(speed: number, deg: number): string {
    // Convert degrees into a cardinal direction
    let windDirection: string;
    if (deg >= 337.5 || deg < 22.5) {
      windDirection = "North";
    } else if (deg < 67.5) {
      windDirection = "North-East";
    } else if (deg < 112.5) {
      windDirection = "East";
    } else if (deg < 157.5) {
      windDirection = "South-East";
    } else if (deg < 202.5) {
      windDirection = "South";
    } else if (deg < 247.5) {
      windDirection = "South-West";
    } else if (deg < 292.5) {
      windDirection = "West";
    } else {
      windDirection = "North-West";
    }
  
    if (speed < 1) {
      return "Calm winds with barely any movement.";
    } else if (speed < 5) {
      return `A light breeze from the ${windDirection}.`;
    } else if (speed < 10) {
      return `Gentle wind at ${speed} m/s blowing from the ${windDirection}.`;
    } else if (speed < 20) {
      return `Moderate wind at ${speed} m/s coming from the ${windDirection}.`;
    } else {
      return `Strong winds at ${speed} m/s from the ${windDirection}.`;
    }
  }
  
  

  
  // Function to get a pressure message based on atmospheric pressure (in hPa)
  export function getPressureMessage(pressure: number): string {
    if (pressure < 1000) {
      return `Low atmospheric pressure at ${pressure} hPa—conditions might be stormy.`;
    } else if (pressure < 1020) {
      return `Normal atmospheric pressure at ${pressure} hPa.`;
    } else {
      return `High atmospheric pressure at ${pressure} hPa—expect clear skies.`;
    }
  }
  
  // Function to get a humidity message based on humidity percentage
  export function getHumidityMessage(humidity: number): string {
    if (humidity < 30) {
      return `Low humidity at ${humidity} %. The air might feel dry.`;
    } else if (humidity < 60) {
      return `Comfortable humidity at ${humidity} %.`;
    } else {
      return `High humidity at ${humidity} %. It may feel muggy.`;
    }
  }
  
  // Function to get a sea level pressure message (in hPa)
  // Note: Some locations may not provide sea level data.
  export function getSeaLevelMessage(seaLevel: number | undefined): string {
    if (seaLevel === undefined || seaLevel === null) {
      return "Sea level data is not available.";
    } else if (seaLevel < 1013) {
      return `Below average sea level pressure at ${seaLevel} hPa.`;
    } else if (seaLevel === 1013) {
      return `Average sea level pressure at ${seaLevel} hPa.`;
    } else {
      return `Above average sea level pressure at ${seaLevel} hPa.`;
    }
  }
  
  // Function to get a coordinates message based on latitude and longitude
  export function getCoordinatesMessage(latitude: number, longitude: number): string {
    if (latitude && longitude) {
      return `Location coordinates: Latitude ${latitude.toFixed(2)}, Longitude ${longitude.toFixed(2)}`;
    } else {
      return "Coordinates data not available.";
    }
  }
