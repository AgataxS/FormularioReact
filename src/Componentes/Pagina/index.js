import "./Pagina-style.css"
import {useState} from "React";
const Pagina=(props)=>{
    console.log(props)
    return <section className="paginaSection">
        <h3 className="Title">MIS PERSONAJES</h3>
        <img src="/img/boton.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>

}
export default Pagina;