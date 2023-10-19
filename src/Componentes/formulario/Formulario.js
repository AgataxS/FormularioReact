
import "./Formulario-style.css"
import Texto from "../Texto/Texto.js"

const formulario=()=>{
    return <section className="formulario">
        <form>
            <h2>RELLENA PARA CREAR UN NUEVO PERSONAJE</h2>
            <Texto titulo="Nombre" placeholder="Ingresar Nombre"/>
            <Texto titulo="Rango" placeholder="Ingresr el rango"/>
            <Texto titulo="Foto" placeholder="Ingresar enlace de foto"/>


        </form>
    </section>
}
export default formulario