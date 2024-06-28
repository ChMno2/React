import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          //'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=rdec-key-123-45678-011121314'
          'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-20AE7C17-7B81-4ECE-8169-C0105832C741&locationName=%E9%9B%B2%E6%9E%97%E7%B8%A3'
        );
        setWeatherData(response.data.records.location[0]);
        setLoading(false);
      } catch (error) {
        setError('無法獲取氣象資訊');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <p>正在加載氣象資訊...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>雲林縣氣象資訊</h2>
      {weatherData && (
        <ul>
          {weatherData.weatherElement.map((element, index) => (
            <li key={index}>
              <strong>{element.elementName}</strong>: {element.time[0].parameter.parameterName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WeatherInfo;
