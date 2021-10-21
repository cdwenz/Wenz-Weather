import React, {useState} from 'react';
import Nav from '../components/Nav';
import Cards from '../components/Cards';
import SearchBar from '../components/SearchBar';
import Ciudad from "../components/Ciudad";
import {Route, Switch} from "react-router-dom";
import styles from './App.module.css'
import Time from '../components/date';
require('dotenv').config()

export default function App() {
    const [cities, setCities] = useState([]);
    const [detail, setDetail] = useState('');
    const apiKey = process.env.REACT_APP_APIKEY;

  function onSearch(ciudad) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=${apiKey}&units=metric`)
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
                  setDetail(ciudad);
                  if(cities.length < 6){
                      cities.find(c => c.id === ciudad.id)?
                          alert('Ciudad ya cargada'):
                          setCities(oldCities =>[...oldCities, ciudad])
                  }else{
                      setCities(oldCities => {oldCities.shift(); return [...oldCities, ciudad]} )
                  }
                  
              }else{
                  alert('Ciudad no encontrada')
              }
              document.querySelector('#inputCiudad').value = ''
          })
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id))
    setDetail(cities[cities.length-2])
  }


 function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        setDetail(ciudad[0]);
    } else {
        return null;
    }
  }

  return (
      <div className={styles.app}>
         <div className={styles.bkg} />
         <div className={styles.container}>
                <div className={styles.searchGrid}>
                    <SearchBar
                        onSearch={onSearch}
                    />
                    <Time /> 

             <div className={styles.ciudad}>
                {
                    
                }<Ciudad
                    city = {detail}
                />
             </div>
                </div>
                <div className={styles.citiesC}>
                        <Cards
                        cities={cities}
                        onClose={onClose}
                        onFilter={onFilter}
                        />
                </div>
         </div>
    </div>
   // <Switch>
   //  <div className={styles.app}>
   //      <div className={styles.bkg} />
   //      <div className={styles.container}>
   //          <Route
   //              path='/'
   //              render={()=><SearchBar onSearch={onSearch}/>}
   //          />
   //          <Route
   //              exact path="/"
   //              render={()=><Cards cities={cities} onClose={onClose}/>}
   //          />
   //          <Route
   //              exact path="/ciudad/:id" //param = id
   //              render={({match}) => <Ciudad
   //                  city={onFilter(match.params.id)}
   //                  />}
   //          />
   //      </div>
   //  </div>
   // </Switch>
  );
}
