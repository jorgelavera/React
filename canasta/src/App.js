import './App.css';
import NavBar from "./components/Header/NavBar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  const saludo = 'Saludo solicitado por la consigna';
  return (
    <>
      <NavBar />
      <ItemListContainer saludo={saludo}/>
    </>
  );
}

export default App;
