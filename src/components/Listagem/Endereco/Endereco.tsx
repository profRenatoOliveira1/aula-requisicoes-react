import { type JSX, useState } from "react";
import './Endereco.css';
import EnderecoRequests from "../../../fetch/EnderecoRequests";

interface Endereco {
    cep: string
    state: string
    city: string
    neighborhood: string
    street: string
    location: {
        type: string
        coordinates: {
            longitude: string
            latitude: string
        }
    }
}

function Endereco(): JSX.Element {

    const [cep, setCep] = useState("");
    const [cepInfo, setCepInfo] = useState<Endereco | null>(null);

    const fetchCEP = async () => {
        try {
            const retornoAPI = await EnderecoRequests.consultaCEP(cep);
            setCepInfo(retornoAPI);
        } catch (error) {
            console.error(`Erro na busca. ${error}`);
        }
    }

    return (
        <section className="endereco">
            <div className="endereco-container">
                <h1 className="endereco-cabecalho">Endereço</h1>

                <input
                    type="text"
                    name="cep"
                    id="cep"
                    className="cep"
                    onChange={(e) => setCep(e.target.value)}
                />

                <button
                    className="endereco-botao"
                    onClick={fetchCEP}
                >
                    Buscar endereço
                </button>

                <section className="detalhes-endereco">
                    {cepInfo && (
                        <>
                            <p>Cidade: {cepInfo.city}</p>
                            <p>Estado: {cepInfo.state}</p>
                            <p>Rua: {cepInfo.street}</p>
                            <p>Bairro: {cepInfo.neighborhood}</p>
                            <p>Location: {cepInfo.location.type}</p>
                            <p>Latitude: {cepInfo.location.coordinates.latitude}</p>
                            <p>Longitude: {cepInfo.location.coordinates.longitude}</p>
                        </>
                    )}
                </section>
            </div>
        </section>
    )
}

export default Endereco;