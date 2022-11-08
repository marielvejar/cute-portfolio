import './App.css';
import React from 'react';
import { NavBar } from './componentes/NavBar';
import { Banner } from './componentes/Banner';
import { Skills } from './componentes/Skills';
import { Projects } from './componentes/Projects';
import { Contact } from './componentes/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
