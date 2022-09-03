import React from 'react';
import './App.css';
import NavBar from "./components/Header/NavBar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.js';

function App() {
  const count = 1;

  return (
    <>
      <NavBar count={count} />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;