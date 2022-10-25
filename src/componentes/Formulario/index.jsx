import { React, useState } from "react"
import styles from "./Formulario.module.scss"
import Botao from "componentes/Botao"
import Campo from "componentes/Campo"
import CaixaTexto from "componentes/CaixaTexto"
import ListaSelecao from "componentes/ListaSelecao"

export default function Formulario({aoCadastrar, categorias, aoCadastrarCategoria, exibicaoFormulario}) {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [imagemCapa, setImagemCapa] = useState('');
    const [categoria, setCategoria] = useState('');
    const [resumo, setResumo] = useState('');
    const [novaCategoria, setNovaCategoria] = useState('');
    const [corCategoria, setCorCategoria] = useState('#000000');

    const  aoSubmeterCard = (evento) => {
        evento.preventDefault()
        aoCadastrar({titulo, autor, imagemCapa, categoria, resumo}) 

        //limpa os campos do formulário
        setTitulo('')
        setAutor('')
        setImagemCapa('')
        setCategoria('')
        setResumo('')
    }

    const aoSubmeterCategoria = (evento) => {
        evento.preventDefault()
        aoCadastrarCategoria({nome: novaCategoria, cor: corCategoria})

        //limpa os campos do formulário
        setNovaCategoria('')
        setCorCategoria('#000000')
    }

    return (
        <section className={ exibicaoFormulario ? `${styles.container__formulario}` : `${styles.container__formulario} ${styles.invisivel}` }>
            <form className={styles.formulario} onSubmit={aoSubmeterCard}>
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

            <form className={styles.formulario} onSubmit={aoSubmeterCategoria}>
                <h2>Preencha os dados para criar uma nova categoria de livros.</h2>
                <Campo
                    label="Categoria"
                    type="text"
                    placeholder="Digite o nome da categoria"
                    obrigatorio={true}
                    valor={novaCategoria}
                    aoAlterado={valor => setNovaCategoria(valor)}
                />
                <Campo
                    label="Escolha uma cor para a categoria"
                    type="color"
                    obrigatorio={true}
                    valor={corCategoria}
                    aoAlterado={valor => setCorCategoria(valor)}
                />
                <Botao>
                    Criar categoria
                </Botao>
            </form>

        </section>
    )
}
