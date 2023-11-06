
import './App.css';
import CatAPI from './components/Cat-API/index.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Generador de Gatos en ReactJS</h1>
        <CatAPI/>
        <h3>Creado por Alisson Ross para Modulo 3 BVT 2023</h3>
      </header>
    </div>
  );
}

export default App;
