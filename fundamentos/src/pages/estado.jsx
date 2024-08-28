import Layout from "../components/Layout";
import { useState } from 'react'

export default function Estado() {

    const [numero, setNumero] = useState(0)

    //let numero = state[0]
    //let alterarValorNumero = state[1]

    function incrementar() {
        setNumero(numero + 1)
    }

    return(
        <Layout titulo="Componentes com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}