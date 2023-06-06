import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../../components";
import Home from "../../pages/Home"
import Sobre from "../../pages/Sobre"
import Questao1 from "../../pages/Questao1"
import Questao2  from "../../pages/Questao2"
import Error from "../../pages/Error"

function Rotas(){
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre/:id" element={<Sobre/>}/>
                <Route path="/q1" element={<Questao1/>}/>                    <Route path="/q2" element = {<Questao2/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}export default Rotas