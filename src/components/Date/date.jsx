import React from 'react';
import styles from './date.module.css'

export default function Time () {
    var diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    function fecha(){
        var f = new Date();
        let fecha = (diasSemana[f.getDay()] + " " + 
                        f.getDate() + " de " + meses[(f.getMonth())]); 
        return fecha
    }
    return (
        <div className={styles.fecha}>
            {fecha()}
        </div>

    );
};
