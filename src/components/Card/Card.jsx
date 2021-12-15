import React from 'react';
import styles from './card.module.css'
import {IoCloseCircleOutline} from 'react-icons/io5'

export default function Card ({min, max, name, img, onClose, id, primary, onFilter}) {
console.log(img)
    return (
        <div className={`${styles.divPrincipal} ${primary?styles.primary:""}`}>
         <span className={styles.name}>
             <button className={styles.name}  onClick={onFilter}>{name.slice(0,10)}</button>
             {!primary && <button className={styles.btn} onClick={onClose}><IoCloseCircleOutline/></button>}
          </span>
          <img src={img} alt="nada" />
        <div className={styles.temps}>
          <div className={styles.temp}>
              <span>min:</span>
              <span> {min}</span>
          </div>
          <div className={styles.temp}>
              <span>max:</span>
              <span>{max}</span>
          </div>
        </div>

        </div>

    );
};