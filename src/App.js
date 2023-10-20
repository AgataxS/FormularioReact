import {useState} from React;
import Pagina from './Componentes/Pagina/index.js';
import Header from './Componentes/header/Header.js';
import './App.css';
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
    <Pagina cambiarMostrar={cambiarMostrar}></Pagina> 
    
    
   </div>
  
  );
}

export default App;
