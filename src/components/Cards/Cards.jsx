import React from 'react';
import Card from '../Card/Card';
import styles from './cards.module.css'

export default function Cards({cities, onClose, onFilter}) {
  if(cities){
    return (
      <div >
        <div className={styles.divCards}>
        {cities.map(c => <Card
            key={c.id}
            id={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={`http://openweathermap.org/img/wn/${c.img}@2x.png`}
            onClose={() => onClose(c.id)}
            onFilter={()=> onFilter(c.id)}
          /> )}
        </div>
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
