import React from 'react'
import styles from './Campo.module.scss'

export default function Campo({label, type='text', placeholder, valor, aoAlterado, obrigatorio=false}) {
  return (
    <div className={styles.campo}>
        <label>{label}</label>
        <input 
          type={type} 
          value={valor} 
          onChange={evento => aoAlterado(evento.target.value)}
          placeholder={placeholder} 
          required={obrigatorio}           
        />
    </div>
  )
}
