import { useParams } from "react-router-dom"

function Sobre(){
    const {id} = useParams();

    return(
        <h1>PAGINA DE SOBRE {id}</h1>
    )
}export default Sobre