import { type JSX } from 'react';
import Endereco from '../../components/Listagem/Endereco/Endereco';
import Navegacao from '../../components/Navegacao/Navegacao';
import Rodape from '../../components/Rodape/Rodape';

function PEndereco(): JSX.Element {
    return (
        <>
            <Navegacao />
            <Endereco />
            <Rodape />
        </>
    );
}

export default PEndereco;