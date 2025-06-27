import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {

    const[city, setCity] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.length > 0) {
            navigate(`/weather/${city}`)
        }
    }

  return (
    <form onSubmit={handleSubmit} className='flex shadow-md rounded-lg overflow-hidden'> 
        <input
        type='text'
        placeholder="Enter your city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className=''
        />

        <button 
        type='submit'
        className='bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 transition'/>
</form>
  )
}
