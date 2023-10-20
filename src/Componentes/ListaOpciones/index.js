import "./Lista-style.css"
const ListaOpciones=(props)=>{

    const lpersonajes=[
        "Anime",
        "Serier",
        "Pelicula",
        "Meme",
        "Fanstasia",
        "RRSS",
        "Histologia"
    ]
    const cambio2=(e)=>{
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
            <label>Equipo</label>
            <select value={props.valor} onChange={cambio2}>
                <option value="" disabled defaultValue="Seleccione Su equipo"></option>
                {lpersonajes.map((lpersonajes,index )=>
                <option key ={index}> {lpersonajes}</option>  )}
            </select>
    </div>
}
export default ListaOpciones