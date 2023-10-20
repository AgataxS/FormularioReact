import {useState} from 'react';
import './App.css';
import Pagina from './Componentes/Pagina/index.js';
import Header from './Componentes/header/Header.js';
import Formulario from './Componentes/formulario/Formulario.js';



function App() {

  const [mostrarFormulario,actualizarFormulario]=useState(true)
  const cambiarMostrar=()=>{
    actualizarFormulario(!mostrarFormulario)
  }
  return (
   <div>
    <Header/>
    {mostrarFormulario && <Formulario/>}
    <Pagina cambiarMostrar={cambiarMostrar}/> 
   </div>
  );
}

export default App;
