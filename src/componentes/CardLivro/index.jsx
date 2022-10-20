import React from 'react'
import styles from './CardLivro.module.scss'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export default function CardLivro({ livro, corDeFundo, aoFavoritar }) {

    const favoritar = () =>{
        aoFavoritar(livro.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar 
    }

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
                <div className={styles.favoritar}>
                    {livro.favorito 
                    ? <AiFillHeart {...propsFavorito} color="#FF0000" /> 
                    : <AiOutlineHeart {...propsFavorito} />}
                </div>
            </div>
        </div>
    )
}
