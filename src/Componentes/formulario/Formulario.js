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
    const envio=(evento)=>{
        evento.preventDefault();
       // console.log(envio,evento)
    }
    return <section className="formulario">
        <form onSubmit={envio}>
            <h2>RELLENA PARA CREAR UN NUEVO PERSONAJE</h2>
            <Texto titulo="Nombre" placeholder="Ingresar Nombre"/>
            <Texto titulo="Rango" placeholder="Ingresr el rango"/>
            <Texto titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones></ListaOpciones>
            <Boton>Crear</Boton>




        </form>
    </section>
}
export default Formulario