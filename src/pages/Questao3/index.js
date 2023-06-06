import { useState } from "react";

function Questao3(){
    const[numero,setNumero] = useState(0);
    const[numeroSorteado, setNumeroSorteado] = useState(Math.floor(Math.random() * 100) + 1);
    const[resultado, setResultado] = useState("");
    const[tentativas, setTentativas] = useState(5);
   

    const reinicair = function reinicair(){
        setTentativas(5);
        setNumeroSorteado(Math.floor(Math.random() * 100) + 1)

    }

   const handlerOnSubmmit = function jogar(e){
        e.preventDefault();

        let tentiva = parseInt(numero);
        let tentativasRestante = tentativas

        if(tentiva === numeroSorteado){
            setResultado("Acertou! O número era: "+numeroSorteado);
            reinicair();
        }else if(tentiva > numeroSorteado){
            setResultado("Errou! O número sorteado é maior que "+tentiva + tentativas+ "tentativas restantes");
            setTentativas(tentativasRestante -= 1)
        }else if(tentiva < numeroSorteado){
            setResultado("Errou! O número sorteado é menor que "+tentiva + tentativas+ "tentativas restantes");
            setTentativas(tentativasRestante -= 1)
        }

        if(tentativas === 0){
            reinicair();
        }

    }

    return(
        <div>
            <h1>Jogo do sorteio</h1>
            <form onSubmit={handlerOnSubmmit}>
                <label htmlFor="Numero">Digite um número</label>
                <input type="text" id="Numero" value={numero} onChange={(e) => setNumero(e.target.value)}/>
                <button type="submit">Tentar</button>
            </form>
            <div>
                <p>{resultado}</p>
            </div>
        </div>
    )

}export default Questao3