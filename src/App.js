import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Fetchdata from './componants/Fetchdata';
import Search from './componants/Search';

function App () {
   const onSearchchange=(searchdata)=>{
    // console.log(searchdata)
   }

  return (
    <div className="App">
      {/* <div className="container">
        <input type="text" id="cityInput" placeholder="Enter city name" ref={ inputcity } />
        <button onClick={ getWeather }>Get Weather</button>

        
        <Fetchdata/>
      </div> */}
      <Search onSearchchange={onSearchchange}/>
    </div>
  );
}

export default App;
