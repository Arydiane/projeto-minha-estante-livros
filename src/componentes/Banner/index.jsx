import React from 'react'
import styles from './Banner.module.scss'
import logo from './logo.png'
import banner from './banner.png'

export default function Banner() {
  return (
    <header className={styles.banner}>
        <img className={styles.banner__imagem} src={banner} alt='Livros organizados em uma estante' />
        <div className={styles.banner__container}>
            <img className={styles.banner__logo} src={logo} alt='Logomarca da Minha estante de livros' />
            <h1 className={styles.banner__texto}>Organize suas leituras por categorias e tenha <br /> sempre em mãos um resumo dos livros lidos.</h1>
        </div>
    </header>
  )
}
