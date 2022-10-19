import React from 'react'
import styles from './CaixaTexto.module.scss'

export default function CaixaTexto({ label, name, placeholder, valor, aoAlterado, obrigatorio = false }) {
  return (
    <div className={styles.caixaTexto}>
      <label>{label}</label>
      <textarea
        required={obrigatorio}
        placeholder={placeholder}
        name={name}
        cols={3}
        rows={5}
        maxLength="280"
        value={valor}
        onChange={evento => aoAlterado(evento.target.value)}
      />
    </div>
  )
}
