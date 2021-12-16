import React from 'react';
import './styles/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import SendFile from './pages/sendFile.js';
import Exams from './pages/exams.js';
import ExamsProfessor from './pages/examsProfessor.js';
import ExamsSubject from './pages/examsSubject.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact></Route>
        <Route path='/send-file' element={<SendFile />} exact></Route>
        <Route path='/exams' element={<Exams />} exact></Route>
        <Route
          path='/exams/professor'
          element={<ExamsProfessor />}
          exact
        ></Route>
        <Route path='/exams/subject' element={<ExamsSubject />} exact></Route>
      </Routes>
    </BrowserRouter>
  );
}
