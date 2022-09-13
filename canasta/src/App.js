import React from 'react';
import './App.css';
import NavBar from "./components/Header/NavBar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.js';
import { Route, Routes } from 'react-router-dom';
import { CartWidget } from './components/Header/CartWidget.js'

function App() {
  const count = 1;

  return (
    <>
      <NavBar count={count} />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/producto/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartWidget />} />
      </Routes>
    </>
  );
}

export default App;