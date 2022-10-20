import React from 'react'
import styles from './Categoria.module.scss'
import CardLivro from "componentes/CardLivro";
import hexToRgba from 'hex-to-rgba';

export default function Categoria({ livros, categoria, aoFavoritar }) {

    return (
        <div className={styles.categoria} style={{ background: hexToRgba(categoria.cor, '0.3') }}>
            <h3 style={{ borderColor: categoria.cor}}>{categoria.nome}</h3>
            <div className={styles.categoria__itens}>
                {livros.map((livro, indice) => {
                    return (
                        <CardLivro
                            key={indice}
                            livro={livro}
                            corDeFundo={categoria.cor}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </div>
    )
}
