import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Caracteristicas from './components/Caracteristicas';
import Productos from './components/Productos';
import Acercade from './components/Acercade';
import Class from './components/Class';
import Horario from './components/Horario';
import Inscripcion from './components/Inscripcion';
import Contact from './components/Contact';
import Piedepagina from './components/Piedepagina';


import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Inicio />
      <Caracteristicas />
      <Acercade />
      <Class />
      <Productos />
      <Horario />
      <Inscripcion/>
      <Contact />
      <Piedepagina />
    </div>
  );
};

export default App;