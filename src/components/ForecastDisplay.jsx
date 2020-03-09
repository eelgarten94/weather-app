import React from "react";

const ForecastDisplay = ({
  currentForecastDays,
  selectedFormat,
  convertToCelsius
}) => {
  if (!currentForecastDays) {
    return <div>Loading...</div>;
  }

  const dayDisplays = currentForecastDays.map(day => {
    let date = new Date(day.dt_txt).toDateString("");
    const iconSrc = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;

    return (
      <div key={day.dt} className="three wide column">
        <h3>{date}</h3>
        <img src={iconSrc} alt={day.weather[0].main} />
        <p>
          {selectedFormat === "F"
            ? Math.round(day.main.temp)
            : convertToCelsius(Math.round(day.main.temp))}
          °
        </p>
        <p>{day.weather[0].main}</p>
      </div>
    );
  });

  return <div className="ui row">{dayDisplays}</div>;
};

export default ForecastDisplay;
