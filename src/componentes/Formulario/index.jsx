import { React, useState } from "react"
import styles from "./Formulario.module.scss"
import Botao from "componentes/Botao"
import Campo from "componentes/Campo"
import CaixaTexto from "componentes/CaixaTexto"
import ListaSelecao from "componentes/ListaSelecao"

export default function Formulario({aoCadastrar, categorias}) {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [imagemCapa, setImagemCapa] = useState('');
    const [categoria, setCategoria] = useState('');
    const [resumo, setResumo] = useState('');

    const  aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({titulo, autor, imagemCapa, categoria, resumo}) 

        //limpa os campos do formulário
        setTitulo('')
        setAutor('')
        setImagemCapa('')
        setCategoria('')
        setResumo('')
    }

    return (
        <section className={styles.container__formulario}>
            <form className={styles.formulario} onSubmit={aoSubmeter}>
                <h2>Preencha os dados do livro para criar o card.</h2>
                <Campo
                    label="Título"
                    type="text"
                    placeholder="Digite o título do livro"
                    obrigatorio={true}
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />
                <Campo
                    label="Autor(es)"
                    type="text"
                    placeholder="Digite o nome(s) do autor(es)"
                    obrigatorio={true}
                    valor={autor}
                    aoAlterado={valor => setAutor(valor)}
                />
                <Campo
                    label="Imagem da capa"
                    type="text"
                    placeholder="Informe endereço para imagem da capa."
                    valor={imagemCapa}
                    aoAlterado={valor => setImagemCapa(valor)}
                />
                <ListaSelecao
                    label="Categoria"
                    itens={categorias}
                    obrigatorio={true}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />
                <CaixaTexto
                    label="Resumo"
                    name="resumo"
                    placeholder="Digite um pequeno resumo do livro. Limite de caracteres: 280."
                    valor={resumo}
                    aoAlterado={valor => setResumo(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}
