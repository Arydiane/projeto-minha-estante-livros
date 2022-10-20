import React from 'react'
import styles from './CardLivro.module.scss'

export default function CardLivro({ livro, corDeFundo }) {

    return (
        <div className={styles.cardLivro}>
            <div className={styles.cardLivro__cabecalho} style={{ backgroundColor: corDeFundo }}>
                <h4>{livro.titulo}</h4>
                <h5>{livro.autor}</h5>
            </div>
            <div className={styles.cardLivro__rodape}>
                <img src={livro.imagemCapa} alt={`Capa do livro ${livro.titulo}`} />
                <p>
                    <span>Resumo: </span>
                    {livro.resumo}
                </p>
            </div>
        </div>
    )
}
