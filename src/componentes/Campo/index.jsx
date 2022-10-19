import React from 'react'
import styles from './Campo.module.scss'

export default function Campo({label, type='text', placeholder, obrigatorio=false}) {
  return (
    <div className={styles.campo}>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} required={obrigatorio}/>
    </div>
  )
}
