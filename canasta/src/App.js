import React from 'react';
import './App.css';
import NavBar from "./components/Header/NavBar.js";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  const count = 1;

  return (
    <>
      <NavBar count={count} />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/list' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;