import React from 'react';
import styles from './ciudad.module.css';


export default function Ciudad({city}){
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
}