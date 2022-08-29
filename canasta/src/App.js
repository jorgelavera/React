import './App.css';
import NavBar from "./components/Header/NavBar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCount from './components/ItemListContainer/ItemCount.js'

function App() {
  const saludo = 'Saludo!';
  const stock = 10;
  const initial = 1;
  const count = 1;

  const onAdd = () => {
    // Esto se supone que manda la cantidad al carrito
    // pero todavía no entendí cómo pasar hacia el count de acá, desde el count de ItemCount
    //De todas formas la consigna pide solamente "llamar a la función"
    console.log(count);
  };

  return (
    <>
      <NavBar count={count} />
      <ItemListContainer saludo={saludo} />
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
    </>
  );
}

export default App;
