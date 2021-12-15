import React from 'react';
import './styles/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import SendFile from './pages/sendFile.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact></Route>
        <Route path='/send-file' element={<SendFile />} exact></Route>
      </Routes>
    </BrowserRouter>
  );
}
