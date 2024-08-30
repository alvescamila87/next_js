'use client';
import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { useEffect, useState } from "react";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  // criar estados para armazenar cliente
  const [cliente, setCliente] = useState(Cliente.vazio())

  // caso usar ClienteRepositorio
  const [clientes, setClientes] = useState<Cliente[]>([])

  // solução temporária de visibilidade entre 'lista de clientes (tabela)' e 'editar cliente (form)'
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  /*
  caso usar ClienteRepositorio, comentar esse array de geração de dados

  // gerar massa de dados (lista de clientes conforme props esperadas na classe)
  const clientes = [
    new Cliente('Madalena', 23, '1'),
    new Cliente('Zebedeu', 24, '2'),
    new Cliente('Ester', 21, '3'),
    new Cliente('Tobias', 25, '4')
  ]
  */
 
  //caso usar ClienteRepositorio, comentar esse array de geração de dados
  // para alterar estado na inicialização do componente
  useEffect(obterTodos, [])
  
function obterTodos() {
  repo.obterTodos().then(clientes => {
    setClientes(clientes)
    setVisivel('tabela')
  })
}

  // identificar o cliente pelo ID no botão Editar
  function clienteSelecionado(cliente: Cliente){
    //console.log(`Selecionar... ${cliente.nome}`)
    setCliente(cliente)
    setVisivel('form')
  }

  // identificar o cliente pelo ID no botão Excluir
  async function clienteExcluido(cliente: Cliente){
    //console.log(`Excluir... ${cliente.nome}`)
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
    setVisivel('form') // após salvar, volta da tabela form para form
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo cliente</Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            >
            </Tabela>
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          >              
          </Formulario>
        )}     
      </Layout>
    </div>    
  );
}
