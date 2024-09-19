import axios from 'axios'
import '../App.css';
import React, { useState, useRef, useEffect } from 'react'
import { FaCloudRain } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi";
import { TbTemperatureSun } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineMenu } from "react-icons/md";
export default function Search ( { onSearchchange } ) {
    const [ search, setSearch ] = useState( "" )
    const [ results, setResults ] = useState( null )

    const CityUrl = `https://api.weatherapi.com/v1/current.json?key=823e454f44be494a9bc111749241209&q=${ search }`
    const handleonchange = ( event ) => {
        // setSearch( searchdata )
        // onSearchchange( searchdata )
        console.log( event.target.value )
        setSearch( event.target.value )


    }
    const getWeather = async () => {
        try {
            let response = await axios.get( `${ CityUrl }` );
            console.log( response )
            setResults( response.data )
            return response.data;
        } catch ( error ) {
            console.log( "error", error )
            return error;
        }
    }

    return (
        <div className='container' >
            <div className='inputandbutton'>
                <input type="text" id="cityInput" placeholder="Enter city name" onChange={ handleonchange }
                />
                <button onClick={ getWeather }>Get Weather</button>
            </div>
            <div className='maindiv'>
                <div className='left_colum' style={ { "backgroundImage": "sun" } }>
                    { results && Object.keys( results ).length > 0 ? <p className='country'>{ results.location.contry }</p> : <p className='country'>India</p> }

                    <div className='timeday'>
                        <p id='time' className=''>
                            { setInterval( () => {
                                let time = document.getElementById( "time" );
                                const today = new Date();
                                let h = today.getHours();
                                let m = today.getMinutes();
                                time.innerHTML = `${ h }:${ m }`
                            }, 6000 ) }
                        </p>
                        <p id="day">
                            { setInterval( () => {
                                let time = document.getElementById( "day" );
                                const today = new Date();
                                let h = today.getHours();
                                let m = today.getMinutes();
                                time.innerHTML = `${ today.toDateString() }`
                            }, 5000 ) }
                        </p>
                    </div>
                </div>
                <div className='output'>
                    {
                        results && Object.keys( results ).length > 0 ?
                            <div className="infocontainer">

                                <div id="weatherInfo">

                                    <hr style={ { "width": "100%", "textAlign": "left", "marginLeft": "0" } } />
                                    <h2 id="temperature"> {results.location.name} </h2>
                                    <hr style={ { "width": "100%", "textAlign": "left", "marginLeft": "0" } } />
                                    <p className="temperature"> <p className='ptag'><TbTemperatureSun />Temperature:</p> <p className='ptag'>{ results.current.temp_c }</p></p>
                                    <hr style={ { "width": "100%", "textAlign": "left", "marginLeft": "0" } } />
                                    <p className="temperature"> <p className='ptag'><MdOutlineMenu /> Humidity</p><p className='ptag'>{ results.current.humidity }%</p> </p>
                                    <hr style={ { "width": "100%", "textAlign": "left", "marginLeft": "0" } } />
                                    <p className="temperature"> <p className='ptag'> <FaCloudRain />Cloud</p> <p className='ptag'>{ results.current.cloud }</p></p>

                                </div>
                            </div> : <div className="infocontainer">

                                <div id="weatherInfo">

                                    <hr style={ { "width": "100%", "textAlign": "left", "marginLeft": "0" } } />
                                    <h2 id="temperature"> Delhi </h2>
                                    <hr style={ { "width": "100%", "textAlign": "left", "marginLeft": "0" } } />
                                    <p className="temperature"> <p className='ptag'><TbTemperatureSun />Temperature:</p> <p className='ptag'>35</p></p>
                                    <hr style={ { "width": "100%", "textAlign": "left", "marginLeft": "0" } } />
                                    <p className="temperature"> <p className='ptag'><MdOutlineMenu /> Humidity</p><p className='ptag'>50%</p> </p>
                                    <hr style={ { "width": "100%", "textAlign": "left", "marginLeft": "0" } } />
                                    <p className="temperature"> <p className='ptag'> <FaCloudRain />Cloud</p> <p className='ptag'>57</p></p>

                                </div>
                            </div>
                    }


                </div>
            </div>
        </div>
    )
}
