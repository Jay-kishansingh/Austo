
import { useState } from 'react';
import './App.css';

function App() {

  const api = {
    key: "5527139157a2b9b20479bb14dce071ab",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  function eventHandle(eve){
    setQuery(eve.target.value)
  }

  function search() {
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(res => res = res.json())
    .then(result => setWeather(result))

    if(typeof(weather.main)=='undefined'){
      document.querySelector("#myWeather").innerHTML = "City Not Matched!";
    }
    else {
      document.querySelector("#myWeather").innerHTML = weather.main.temp;
      setQuery('');
    }
    console.log(weather.main.temp)
  }

  return (
    <div className="App">
      <div className='main warm'>
        <input value={query} onChange={eventHandle} />
        <button onClick={search}>Submit</button>
        <h2 id='myWeather'></h2>
      </div>
      
    </div>
  );
}

export default App;
