import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Basket from './Basket';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
