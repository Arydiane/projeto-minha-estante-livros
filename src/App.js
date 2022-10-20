import Banner from "componentes/Banner";
import Categoria from "componentes/Categoria";
import Formulario from "componentes/Formulario";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './styles/estilosGlobais.scss';

function App() {

  const [categorias, setCategorias] = useState([
    {
      "id": uuidv4(),
      "nome": "Biografia",
      "cor": "#D9895B"
    },
    {
      "id": uuidv4(),
      "nome": "Tecnologia",
      "cor": "#F6C531"
    }
  ])

  const livrosInicial = [
    {
      id: uuidv4(),
      favorito: false,
      titulo: "Steve Jobs",
      autor: "Walter Isaacson",
      imagemCapa: "/imagens-capa/steve-jobs.jpeg",
      categoria: categorias[0].nome,
      resumo: "O livro é baseado em mais de quarenta entrevistas com Jobs ao longo de dois anos, narra a vida atribulada do empresário extremamente inventivo e de personalidade forte e polêmica, cuja paixão pela perfeição e cuja energia indomável revolucionaram seis grandes indústrias."
    },
    {
      id: uuidv4(),
      favorito: false,
      titulo: " Eu Sou Malala",
      autor: "Malala Yousafzai",
      imagemCapa: "/imagens-capa/eu-sou-malala.jpg",
      categoria: categorias[0].nome,
      resumo: "´Eu sou Malala´ é a história de uma família exilada pelo terrorismo global, da luta pelo direito à educação feminina e dos obstáculos à valorização da mulher em uma sociedade que privilegia filhos homens. "
    },
    {
      id: uuidv4(),
      favorito: false,
      titulo: "Bilionários por Acaso - a Criação do Facebook",
      autor: "Ben Mezrich",
      imagemCapa: "/imagens-capa/a-criacao-do-facebook.jpg",
      categoria: categorias[0].nome,
      resumo: "A excitante história de como dois estudantes desenturmados de Harvard, que tentavam aumentar suas chances com o sexo oposto, criaram o site de relacionamento que se tornou uma das mais poderosas empresas do mundo, o FACEBOOK."
    },
    {
      id: uuidv4(),
      favorito: false,
      titulo: "Código Limpo: Habilidades Práticas do Agile Software",
      autor: "Robert C. Martin",
      imagemCapa: "/imagens-capa/codigo-limpo.jpg",
      categoria: categorias[1].nome,
      resumo: "Martin apresenta suas melhores e mais ágeis práticas de limpar códigos 'dinamicamente' um livro que introduzirá gradualmente os valores da habilidade de um profissional de softwares para se tornar um programador melhor."
    },
    {
      id: uuidv4(),
      favorito: false,
      titulo: "Lógica de Programação e Algoritmos com JavaScript",
      autor: "Edécio Fernando Iepsen",
      imagemCapa: "/imagens-capa/logica-programacao-javascript.jpg",
      categoria: categorias[1].nome,
      resumo: "Uma introdução à programação de computadores com exemplos e exercícios para iniciantes. Os capítulos cobrem os temas abordados na disciplina de algoritmos além de tratar assuntos relacionados à construção de páginas Web com JavaScript."
    }
  ]

  const [livros, setLivros] = useState(livrosInicial)

  function cadastrarCategoria(novaCategoria) {
    setCategorias([...categorias, {...novaCategoria, id: uuidv4() }])
  }

  function resolverFavorito(id){
    setLivros(livros.map( livro => {
      if (livro.id === id){
        livro.favorito = !livro.favorito
      }
      return livro
    }))
  }

  function deletarLivro(id){
    setLivros( [...livros.filter( livro => {
      return livro.id !== id
    })])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoCadastrar={livro => setLivros([...livros, livro])}
        aoCadastrarCategoria={cadastrarCategoria}
        categorias={categorias}
      />
      <section>
        <h1>Minha Estante de Livros</h1>
        {categorias.map((categoria, indice) => {
          return (
            <Categoria
              key={indice}
              livros={livros.filter(livro => livro.categoria === categoria.nome)}
              categoria={categoria}
              aoFavoritar={resolverFavorito}
              aoDeletar={deletarLivro}
            />
          )})
        }
      </section>
    </div>
  );
}

export default App;
