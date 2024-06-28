import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as CloudyIcon } from './images/cloudy.svg';
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg';
import { ReactComponent as RainIcon } from './images/rain.svg';
import { ReactComponent as RedoIcon } from './images/redo.svg';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-20AE7C17-7B81-4ECE-8169-C0105832C741&locationName=%E9%9B%B2%E6%9E%97%E7%B8%A3'
      );
      const locationData = response.data.records.location[0];
      setWeatherData(locationData);
      setLoading(false);
    } catch (error) {
      setError('無法獲取氣象資訊');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (loading) return <p>正在加載氣象資訊...</p>;
  if (error) return <p>{error}</p>;

  const observationTime = weatherData.time ? weatherData.time.obsTime : null;
  const temperature = weatherData.weatherElement.find(element => element.elementName === 'TEMP')?.elementValue;
  const windSpeed = weatherData.weatherElement.find(element => element.elementName === 'WDSD')?.elementValue;
  const humid = weatherData.weatherElement.find(element => element.elementName === 'HUMD')?.elementValue;
  const description = weatherData.weatherElement.find(element => element.elementName === 'Wx')?.time[0].parameter.parameterName;
  const rainPossibility = weatherData.weatherElement.find(element => element.elementName === 'PoP')?.time[0].parameter.parameterName;
  const comfortability = weatherData.weatherElement.find(element => element.elementName === 'CI')?.time[0].parameter.parameterName;

  return (
    <div className="container">
      <div className="weatherCard">
        <div className="location">{weatherData.locationName}</div>
        <div className="description">
          {description} {comfortability}
        </div>
        <div className="currentWeather">
          <div className="temperature">
            {Math.round(temperature)} <span className="celsius">°C</span>
          </div>
          <CloudyIcon className="cloudy" />
        </div>
        <div className="airFlow">
          <AirFlowIcon />
          {windSpeed} m/h
        </div>
        <div className="rain">
          <RainIcon />
          {Math.round(rainPossibility)} %
        </div>

        <div
          className="redo"
          onClick={() => {
            setLoading(true);
            setError(null);
            fetchWeatherData();
          }}
        >
          最後觀測時間：
          {observationTime && new Intl.DateTimeFormat('zh-TW', {
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date(observationTime))}{' '}
          <RedoIcon />
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
