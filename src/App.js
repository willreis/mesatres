import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Mesa from './components/Mesa';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/mesa" element={<Mesa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
