import React from "react";
import styles from './input.module.css'

function Input({label, id, value, onChange}){
    return(
        <div className={styles.div}>
            <label className={styles.label}>{label}</label>
            <input id={id} className={styles.id} onChange={onChange}  type='text' value={value}></input>
        </div>
    )
}

export default Input