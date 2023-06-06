import {useState} from "react"
import "./index.css"


function Questao1(){
    const[peso,setPeso] = useState(0);
    const[altura,setAltura] = useState(0);
    const[imc,setImc] = useState(0);
    const[saude, setSaude] = useState("");

    const calcular = function calculaImc(){
        let valor = peso/altura**2;
        setImc(valor);
        checaSaude();
    }

    const checaSaude = function checar(){
        if(imc <25){
            setSaude("Peso normal");
        }else if(imc >= 25 || imc < 30){
            setSaude("Sobre peso");
        }else if(imc >= 30){
             setSaude("Obsesidade");
        }
    }


    return(
        <div>
            <label for="peso">Peso</label>
            <input type="text" value={peso} onChange={(e)=> setPeso(e.target.value)} name="peso" />

            <label for="altura">Altura</label>
            <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} name="altura" />

            <button className="botao" onClick={calcular}>CALCULAR</button>

            <p>{imc.toFixed(2)}</p>
            <p>{saude}</p>
        </div>
    )

}export default Questao1