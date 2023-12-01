import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './source/Login';
import Main from './source/Main';
import Tareas from './page/Tareas';
import Calendario from './page/Calendario';
import Recordatorio from './page/Recordatorio';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/main' element={<Main />}></Route>
        <Route path='/tareas' element={<Tareas />}></Route>
        <Route path='/calendario' element={<Calendario></Calendario>}></Route>
        <Route path='/recordatorio' element={<Recordatorio></Recordatorio>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
