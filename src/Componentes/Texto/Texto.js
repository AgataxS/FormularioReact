import "./Texto-style.css"
const Texto=(props)=>{

    const placeHolderModificado = `${props.placeholder}...`
    return <div className = "texto">
        <label>{props.titulo}</label>
        <input placeholder={placeHolderModificado} required={props.required}></input>
    </div>
}
export default Texto