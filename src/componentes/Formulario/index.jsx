import React from 'react'
import styles from './Formulario.module.scss'
import Campo from "componentes/Campo"
import ListaSelecao from "componentes/ListaSelecao"

export default function Formulario() {

    let categorias = [
        {
            "id": 1,
            "nome": 'Biografia'
        },
        {
            "id": 2,
            "nome": 'Tecnologia'
        }
    ]

    return (
        <section className={styles.container__formulario}>
            <form className={styles.formulario}>
                <h2>Preencha os dados do livro para criar o card.</h2>
                <Campo label="Título" type="text" placeholder="Digite o título do livro" obrigatorio={true} />
                <Campo label="Autor(es)" type="text" placeholder="Digite o nome(s) do autor(es)" obrigatorio={true} />
                <Campo label="Imagem da capa" type="text" placeholder="Informe endereço para imagem da capa." />
                <ListaSelecao label="Categoria" itens={categorias} obrigatorio={true} />
            </form>
        </section>
    )
}
