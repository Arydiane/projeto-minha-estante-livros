import Banner from "./componentes/Banner";
import Campo from "./componentes/Campo";
import './styles/estilosGlobais.scss';

function App() {
  return (
    <div className="App">
      <Banner />
      <Campo label="Título" type="text" placeholder="Digite o título do livro" obrigatorio={true}/>
    </div>
  );
}

export default App;
