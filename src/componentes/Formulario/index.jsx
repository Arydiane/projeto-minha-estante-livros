import { React, useState } from "react"
import styles from "./Formulario.module.scss"
import Campo from "componentes/Campo"
import CaixaTexto from "componentes/CaixaTexto"
import ListaSelecao from "componentes/ListaSelecao"

export default function Formulario() {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [imagemCapa, setImagemCapa] = useState('');
    const [categoria, setCategoria] = useState('');
    const [resumo, setResumo] = useState('');

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
            </form>
            {console.log(titulo, autor, imagemCapa, categoria, resumo)}
        </section>
    )
}
