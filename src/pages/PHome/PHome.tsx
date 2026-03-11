import { type JSX } from 'react';
import Navegacao from '../../components/Navegacao/Navegacao';
import Rodape from '../../components/Rodape/Rodape';
import BoasVindas from '../../components/BoasVindas/BoasVindas';

function PHome(): JSX.Element {
    return (
        <>
            <Navegacao />
            <BoasVindas />
            <Rodape />
        </>
    );
}

export default PHome;