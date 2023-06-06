import{Link} from "react-router-dom"
import "./index.css"

function Menu(){
    return(
        <ul>
             <li><Link to="/">Home</Link></li>
            <li><Link to="/q1" className="active">Questão 1</Link></li>
            <li><Link to="/q2" className="active">Questão 2</Link></li>
        </ul>
    )
} export default Menu;