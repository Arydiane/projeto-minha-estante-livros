import React from 'react'
import styles from './ListaSelecao.module.scss'

export default function ListaSelecao({label, valor, aoAlterado,  itens, obrigatorio=false}) {
  return (
    <div className={styles.listaSelecao}>
        <label>{label}</label>
        <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
            {itens.map(item => <option key={item.id}>{item.nome}</option>)}
        </select>
    </div>
  )
}
