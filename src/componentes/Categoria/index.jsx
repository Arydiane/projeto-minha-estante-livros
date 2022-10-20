import React from 'react'
import styles from './Categoria.module.scss'
import CardLivro from "componentes/CardLivro";

export default function Categoria({ livros, categoria }) {

    return (
        <div className={styles.categoria} style={{ background: categoria.cor }}>
            <h3>{categoria.nome}</h3>
            <div className={styles.categoria__itens}>
                {livros.map((livro, indice) => {
                    return (
                        <CardLivro
                            key={indice}
                            livro={livro}
                            corDeFundo={categoria.cor}
                        />
                    )
                })}
            </div>
        </div>
    )
}
