import { useState } from "react";

function Questao2(){
    const[totalPessoas, setTotalPessoas] = useState(0);
    const[totalGasto, setTotalGasto] = useState(0);
    const[porcentagemGorjeta, setPorcentagemGorjeta] = useState(0);
    const[resultado, setResultado] = useState(0);


    const handlerSumit = function (e){
        e.preventDefault();

        let gorjeta = totalGasto * (porcentagemGorjeta/ 100);
        let totalGeral = parseFloat(totalGasto) + gorjeta;
        let totalPorPessoa = totalGeral / parseInt(totalPessoas);

        setResultado(totalPorPessoa);

    }

    return (
        <div>
            <h1>Emitir conta</h1>
            <form onSubmit={handlerSumit}>
                <label htmlFor="TotalGasto">Total gasto:</label>
                <input type="text" id="TotalGasto" value={totalGasto} onChange={(e) => setTotalGasto(e.target.value)}/>

                <label htmlFor="TotalGorjeta">Gorjeta total:</label>
                <input type="text" id="TotalGorjeta" value={porcentagemGorjeta} onChange={(e) => setPorcentagemGorjeta(e.target.value)} />

                <label htmlFor="TotalPessoas">Total de pessoas:</label>
                <input type="text" id="TotalPessoas" value={totalPessoas} onChange={(e) => setTotalPessoas(e.target.value)} />

                <button type="submit">Calcular</button>

            </form>

            <div>
            <h2>Resultado:</h2>
             <p>Total Geral: R$ {resultado.toFixed(2)}</p>
            </div>

        </div>

    )

}export default Questao2