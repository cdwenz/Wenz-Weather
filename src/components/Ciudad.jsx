import React from 'react';
import { useState } from 'react'
import {useParams} from "react-router-dom";
import styles from './ciudad.module.css';


export default function Ciudad({city}){
    const [andres, setAndres] = useState('')
    console.log(city)
    const params = useParams();

    function buscar (params){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${params.id}&appid=7805f83747ee96211184334cab6c081a&units=metric`)
        .then(r => r.json())
          .then(recurso => {
              if(recurso.main !== undefined){
                  const ciudad = {
                      min: Math.round(recurso.main.temp_min),
                      max: Math.round(recurso.main.temp_max),
                      img: recurso.weather[0].icon,
                      id: recurso.id,
                      name: recurso.name,
                      temp: recurso.main.temp,
                      clima: recurso.weather,
                      viento: recurso.wind,
                      nubes: recurso.clouds,
                      latitud: recurso.coord.lat,
                      longitud: recurso.coord.lon
                  }
                  setAndres(ciudad)
              }else{
                  alert('Ciudad no encontrada')
              }
              document.querySelector('#inputCiudad').value = ''
          })
    }
     // useEffect(() => {
     //     console.log(params.id)
     //
     // }, [])

    if(city){
        return (
            <div >
                <div className={styles.ciudad}>
                    <h3>{city.name}</h3>
                    <div className={styles.datos}>
                        <div className={styles.datos1}>

                            <div>Temperatura: <h5>{Math.round(city.temp)} ºC</h5></div>
                            <div>Clima: <h5>{city.clima[0].description}</h5></div>
                            <div>Viento: <h5>{Math.round(city.viento.speed * 3.6)} km/h</h5></div>
                        </div>
                        <div className={styles.datos1}>
                            <div>Cantidad de nubes: <h5>{city.nubes.all}</h5></div>
                            <div>Latitud: <h5>{city.latitud}º</h5></div>
                            <div>Longitud: <h5>{city.longitud}º</h5></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return <div></div>
    }
        // buscar(params);

        // return andres?(  //andres &&
        //    <div>
        //                 <div>
        //                     <h2>{andres.name}</h2>
        //                     {/*<div className="info">*/}
        //                     {/*    <div>Temperatura: <h5>{Math.round(andres.temp)} ºC</h5></div>*/}
        //                     <div>Clima: <h5>{andres.clima[0].description}</h5></div>
        //                     <div>Viento: <h5>{Math.round(andres.viento.speed)} km/h</h5></div>
        //                     <div>Cantidad de nubes: <h5>{andres.nubes.all}</h5></div>
        //                     <div>Latitud: <h5>{andres.latitud}º</h5></div>
        //                     <div>Longitud: <h5>{andres.longitud}º</h5></div>
        //                     {/*</div>*/}

        //                 </div>
        //             </div>)

        //     :<img src="https://emdiworld.ae/wp-content/plugins/gdrive/css/clouds/cloud_loading_256.gif" alt="img"/>     //!andres && (<h4>cargando</h4>)

    // }
}