import React from 'react'
import facebook from './facebook.png'
import twitter from './twitter.png'
import instagram from './instagram.png'
import logo from './logo.png'
import styles from './Rodape.module.scss'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <ul>
            <li>
                <a href='https://www.facebook.com' target="_blank" rel="noreferrer">
                    <img src={facebook} alt='Ícone do Facebook' />
                </a>
            </li>
            <li>
                <a href='https://www.twitter.com' target="_blank" rel="noreferrer">
                    <img src={twitter} alt='Ícone do Twitter' />
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
                    <img src={instagram} alt='Ícone do Instagram' />
                </a>
            </li>
        </ul>
        <img className={styles.rodape__logo} src={logo} alt='Logomarca da Minha estante de livros' />
        <p className={styles.rodape__texto}>Desenvolvido por <a href='https://github.com/Arydiane' target="_blank" rel="noreferrer">Arydiane Jardim</a></p>
    </footer>
  )
}
