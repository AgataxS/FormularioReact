import { useState } from "react"
import "./Formulario-style.css"
import Texto from "../Texto/Texto.js"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

// const Formulario=()=>{
//     return <section className="formulario">
//         <form>
//             <h2>RELLENA PARA CREAR UN NUEVO PERSONAJE</h2>
//             <Texto titulo="Nombre" placeholder="Ingresar Nombre"/>
//             <Texto titulo="Rango" placeholder="Ingresr el rango"/>
//             <Texto titulo="Foto" placeholder="Ingresar enlace de foto"/>
//             <ListaOpciones></ListaOpciones>
//             <Boton>Crear</Boton>




//         </form>
//     </section>
// }
const Formulario=()=>{

    const [nombre,actualizarNombre]=useState("")
    const [rango,actualizarRango]=useState("")
    const [foto,actualizarFoto]=useState("")
    const [equipo,actualizarEquipo]=useState("")

    const envioDato=(evento)=>{
        evento.preventDefault();
       let datosEnviar={
            nombre:nombre,
            rango:rango,
            foto:foto,
            equipo:equipo
       }
       console.log(datosEnviar);

    }
    return <section className="formulario">
        <form onSubmit={envioDato}>
            <h2>RELLENA PARA CREAR UN NUEVO PERSONAJE</h2>
            <Texto titulo="Nombre" placeholder="Ingresar Nombre" required valor={nombre} actualizarValor={actualizarNombre} />
            <Texto titulo="Rango" placeholder="Ingresr el rango" required valor={rango} actualizarValor={actualizarRango}/>
            <Texto titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto} />
            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} ></ListaOpciones>
            <Boton>Crear</Boton>




        </form>
    </section>
}
export default Formulario