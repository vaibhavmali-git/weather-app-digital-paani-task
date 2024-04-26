/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDate } from "../Utils/useDate";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";
import "../index.css";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    // Update the weather icon based on iconString
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  return (
    <div className="w-[22rem] min-w-[25rem] h-[35rem] glassCard p-6">
      <div className="flex flex-col justify-center items-center gap-4 mt-10">
        <img src={icon} alt="weather_icon" />

        <p className="font-bold text-5xl text-center">
          {temperature} <span className="text-xl">&deg;C</span>
        </p>
      </div>
      <div className="font-bold text-center text-xl mt-4">{place}</div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-1">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-1">{time}</p>
      </div>
      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <div className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          Wind Speed <p className="font-normal">{windspeed} km/h</p>
        </div>
        <div className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">
          Humidity <p className="font-normal">{humidity} gm/m&#179;</p>
        </div>
      </div>

      <hr
        className="bg-slate-600 mt-7"
        style={{
          filter: "brightness(0.7)",
        }}
      />
      <div className="w-full p-3 flex justify-center items-center text-2xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
