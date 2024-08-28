import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

    const[codigo, setCodigo] = useState(1)
    const[cliente, setCliente] = useState({})

    async function obterCliente() {

        // forma 2 - original usando ASYNC
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)

        // forma 1 - original usando PROMISE
        // fetch(`http://localhost:3000/api/clientes/${codigo}`)
        //     .then(resp => resp.json())
        //     //.then(dados => console.log(dados))
        //     .then(dados => setCliente(dados))
    }


    return(
        <Layout titulo="FETCH">
            <div>
                <input 
                    type="number" 
                    value={codigo}
                    onChange={event => setCodigo(event.target.value)}
                />            
                <button onClick={obterCliente}>Obter cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.name}</li>
                <li>E-mail: {cliente.email}</li>
            </ul>
        </Layout>
    )
}