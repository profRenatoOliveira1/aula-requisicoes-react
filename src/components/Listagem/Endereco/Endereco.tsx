import { type JSX, useState } from "react";
import './Endereco.css';
import type EnderecoDTO from "../../../interfaces/EnderecoInterface";

function Endereco(): JSX.Element {
    const [cep, setCep] = useState("");
    const [cepInfo, setCepInfo] = useState<EnderecoDTO | null>(null);

    return (
        <section className="endereco">
            <div className="endereco-container">
                <h1 className="endereco-cabecalho">Endereço</h1>

                <input type="number" name="cep" id="cep" className="cep" onClick={() => { alert('Botão pressionado.') }} />
                <button className="endereco-botao">Buscar endereço</button>

                {/* Implementar campos do resultado da busca */}
                <section className="detalhes-endereco">
                    {cepInfo ? (
                        <div className="ctn-endereco-info">
                            <label htmlFor="cidade">Cidade</label>
                            <input type="text" name="cidade" id="cidade" value={ } disabled />
                            <label htmlFor="estado">Estado</label>
                            <input type="text" name="estado" id="estado" value={ } disabled />
                            <label htmlFor="rua">Rua</label>
                            <input type="text" name="rua" id="rua" value={ } disabled />
                            <label htmlFor="bairro">Bairro</label>
                            <input type="text" name="bairro" id="bairro" value={ } disabled />
                            <label htmlFor="location">Location</label>
                            <input type="text" name="location" id="location" value={ } disabled />
                            <label htmlFor="latitude">Latitude</label>
                            <input type="text" name="latitude" id="latitude" value={ } disabled />
                            <label htmlFor="longitude">Longitude</label>
                            <input type="text" name="longitude" id="longitude" value={ } disabled />
                        </div>
                    ) : (
                        <div className="ctn-endereco-info">
                            <label htmlFor="cidade">Cidade</label>
                            <input type="text" name="cidade" id="cidade" placeholder="Cidade" disabled />
                            <label htmlFor="estado">Estado</label>
                            <input type="text" name="estado" id="estado" placeholder="Estado" disabled />
                            <label htmlFor="rua">Rua</label>
                            <input type="text" name="rua" id="rua" placeholder="Rua" disabled />
                            <label htmlFor="bairro">Bairro</label>
                            <input type="text" name="bairro" id="bairro" placeholder="Bairro" disabled />
                            <label htmlFor="location">Location</label>
                            <input type="text" name="location" id="location" placeholder="Location" disabled />
                            <label htmlFor="latitude">Latitude</label>
                            <input type="text" name="latitude" id="latitude" placeholder="Latitude" disabled />
                            <label htmlFor="longitude">Longitude</label>
                            <input type="text" name="longitude" id="longitude" placeholder="Longitude" disabled />
                        </div>
                    )}
                </section>
            </div>
        </section>
    )
}

export default Endereco;