import { useState } from 'react'
import './App.css'

function App() {

  const [city,setCity] = useState('');
  const [weather,setWeather] = useState(null);
  const [error,setError] = useState('');

  const fetchWeather = async () =>{
    const apiKey = 'e6a7ff86bf7d4b86be011907252306';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try{
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not Found");
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch(err){
      setError(err.message);
      setWeather(null);
    }
  }

  return (
   <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">🌤️ Weather Checker</h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={city}
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Get
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}

        {weather && (
          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold">{weather.location.name}, {weather.location.country}</h3>
            <p className="text-lg">🌡️ {weather.current.temp_c} °C</p>
            <p className="text-gray-600">{weather.current.condition.text}</p>
            <img
              src={weather.current.condition.icon}
              alt="weather icon"
              className="mx-auto mt-2"
            />
          </div>
        )}
      </div>
    </div>
   </>
  )
}

export default App
