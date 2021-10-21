import React, { useState } from "react";
import styles from './search.module.css'
import {IoAdd} from 'react-icons/io5';

export default function SearchBar({onSearch}) {
    const [city, setCity] = useState('')

    function enter(event) {
        if (event.charCode === 13) {
            let ciudad = city;
            setCity('')
            return onSearch(ciudad)
        }
    }
    return (
        <div className={styles.divSearch}>
            <input
                id="inputCiudad"
                className={styles.inputClass}
                type="text"
                placeholder="Ciudad..."
                value={city}
                onChange={e => setCity(e.target.value)}
                onKeyPress={(e) => enter(e)} //e.keyCode === 13 ? onSearch(city) : null
            />
            <button
                    className={styles.btnSearch}
                    onClick={() => {
                        onSearch(city);
                    }}><IoAdd/>
            </button>
        </div>
    )
}