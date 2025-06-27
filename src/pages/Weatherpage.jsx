import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import WeatherDetails from '../components/WeatherDetails'

export default function Weatherpage() {

    // query params 
    const {city} = useParams();
    const [weatherData, setWeatherData] = useState();

    // await : waits for the fullfillment of a promise

    useEffect(()=>{
        const fetchWeather = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/weather?city=${city}`);


                setWeatherData(res.data);
            }
            catch(error) {
  console.error("Fetch error:", error);
  setWeatherData({ error: true });
            }
        }
        fetchWeather();
    },[city])

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4'>
        <div className='max-w-2xl w-full'>
            <WeatherDetails weatherData={weatherData} />
        </div>
    </div>
  )
}
