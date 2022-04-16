import React from 'react';
import { Logo } from './Logo';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import NavItem from './components/lib/NavItem/NavItem';
import Header from './components/Header/Header';

import './styles.scss'

function App() {
  return (
    <BrowserRouter>
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
      </Routes>
    </div>
      
      
    </BrowserRouter>
      
  );
}

export default App;
