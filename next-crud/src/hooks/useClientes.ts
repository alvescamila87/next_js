import ColecaoCliente from "@/backend/db/ColecaoCliente"
import Cliente from "@/core/Cliente"
import ClienteRepositorio from "@/core/ClienteRepositorio"
import { useState, useEffect } from "react"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    //importar hook
    const { exibirFormulario, exibirTabela, formularioVisivel, tabelaVisivel } = useTabelaOuForm()

    const [cliente, setCliente] = useState(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    //const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    useEffect(obterTodos, [])
  
    function obterTodos() {
    repo.obterTodos().then(clientes => {
        setClientes(clientes)
        //setVisivel('tabela')
        exibirTabela()
    })
    }

    // identificar o cliente pelo ID no botão Editar
    function selecionarCliente(cliente: Cliente){
        setCliente(cliente)
        //setVisivel('form')
        exibirFormulario()
    }

    // identificar o cliente pelo ID no botão Excluir
    async function excluirCliente(cliente: Cliente){
        await repo.excluir(cliente)
        obterTodos()
    }

    // quando o clienteMudou (ter acionado o botão: alterar ou salvar)
    async function salvarCliente(cliente: Cliente){
        //console.log(cliente)
        await repo.salvar(cliente)
        //setVisivel('tabela') // após salvar, volta do form para tabela
        obterTodos()
    }

    // quando acionar o botão Novo, após JÁ ter cadastrado um cliente
    function novoCliente(){
        setCliente(Cliente.vazio())
        //setVisivel('form') // após salvar, volta da tabela form para form
        exibirFormulario()
    }

    // exportar funções criadas no useClientes.ts
    return {
        cliente, // o próprio cliente
        clientes, // lista de clientes
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela,
    }

}