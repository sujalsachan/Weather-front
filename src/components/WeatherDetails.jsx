import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function WeatherDetails({ weatherData }) {
  if (
    !weatherData ||
    weatherData.error ||
    !weatherData.forecasts ||
    !Array.isArray(weatherData.forecasts)
  ) {
    return (
      <div className="text-red-500 text-center">
        Loading.....
      </div>
    );
  }

  // Normalize the forecasts array: rename temp → temperature
  const forecast = weatherData.forecasts.map((f) => ({
    ...f,
    temperature: f.temp,
  }));

  const chartData = {
    labels: forecast.map((f) => f.date),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecast.map((f) => f.temperature),
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{weatherData.city}</h2>
          <p className="text-gray-500">{weatherData.description}</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
          alt="Weather Icon"
          className="w-16 h-16"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <p>🌡️ Temp: {weatherData.temp}°C</p>
        <p>💧 Humidity: {weatherData.humidity}%</p>
        <p>🌬️ Wind: {weatherData.wind} km/h</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">5-Day Forecast</h3>
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}
