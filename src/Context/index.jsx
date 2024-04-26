import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Jalgaon");
  const [thisLocation, setLocation] = useState("");

  // Fetch weather data from OpenWeatherMap
  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?lat=18.5204303&lon=73.8567437&units=metric`,
      params: {
        q: place,
        units: "metric",
        appid: "bcbc416f594d0a7c6feec5ba33bfeb36",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      const thisData = response.data;
      setLocation(thisData.name);
      setValues([thisData.main]);
      setWeather({
        ...thisData.main,
        windSpeed: thisData.wind.speed,
        conditions: thisData.weather[0].description,
      });
    } catch (e) {
      console.error(e);
      alert("This place does not exist");
    }
  };

  
  useEffect(() => {
    fetchWeather();
  }, [place]);


  useEffect(() => {
    console.log(values);
  }, [values]);

  // Provider returning context data
  return (
    <StateContext.Provider
      value={{
        weather,
        setPlace,
        values,
        thisLocation,
        place,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Custom hook for accessing context data
export const useStateContext = () => useContext(StateContext);
