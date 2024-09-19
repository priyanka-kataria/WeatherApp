// import React from 'react'
// import { useEffect, useRef, useState } from 'react';


// export default function Fetchdata () {
//     var [ user, setUser ] = useState( "" );

//     const fetchCity = `https://api.weatherapi.com/v1/current.json?key=823e454f44be494a9bc111749241209&q=india`
//     useEffect( () => {
//         fetchUsers( fetchCity );
//     }, [] )
//     const fetchUsers = async ( ap ) => {
//         let res = await fetch( ap );
//         let data = await res.json();
//         setUser( data );
//         //   console.log( data )

//     }
//     try {
//          axios.get()
//     } catch (error) {
//         console.log("error", error)
        
//     }

//        console.log(user.location.name)

//     return ( 
//         <>
//             {
//                 <h2>
//                     { `${ user.location.name}` }
//                     { `${ user.current.cloud}` }
//                 </h2>

//             }
//         </>

//     )
// }
