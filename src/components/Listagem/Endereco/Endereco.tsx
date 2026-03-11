import { type JSX } from "react";
import './Endereco.css';

function Endereco(): JSX.Element {
    return (
        <section className="endereco">
            <div className="endereco-container">
                <h1 className="endereco-cabecalho">Endereço</h1>

                <input type="number" name="cep" id="cep" className="cep" onClick={() => {alert('Botão pressionado.')}} />
                <button className="endereco-botao">Buscar endereço</button>

                {/* Implementar campos do resultado da busca */}
                <section className="detalhes-endereco">
                
                </section>
            </div>
        </section>
    )
}

export default Endereco;