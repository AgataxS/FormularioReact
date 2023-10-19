import "./Lista-style.css"
const ListaOpciones=()=>{

    const lpersonajes=[
        "Anime",
        "Serier",
        "Pelicula",
        "Meme",
        "Fanstasia",
        "RRSS",
        "Histologia"
    ]

    return <div className="lista-opciones">
            <label>Equipo</label>
            <select>
                {lpersonajes.map((lpersonajes,index )=>
                <option key ={index}> {lpersonajes}</option>  )}
            </select>
    </div>
}
export default ListaOpciones