import './App.css';
import NavBar from "./components/Header/NavBar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  const count = 1;

  return (
    <>
      <NavBar count={count} />
      <ItemListContainer />
    </>
  );
}

export default App;
