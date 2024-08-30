'use client';
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useState } from "react";

export default function Home() {

  // gerar massa de dados (lista de clientes conforme props esperadas na classe)
  const clientes = [
    new Cliente('Madalena', 23, '1'),
    new Cliente('Zebedeu', 24, '2'),
    new Cliente('Ester', 21, '3'),
    new Cliente('Tobias', 25, '4')
  ]

  // identificar o cliente pelo ID no botão Editar
  function clienteSelecionado(cliente: Cliente){
    console.log(`Selecionar... ${cliente.nome}`)
  }

  // identificar o cliente pelo ID no botão Excluir
  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir... ${cliente.nome}`)
  }

  // solução temporária de visibilidade entre 'lista de clientes (tabela)' e 'editar cliente (form)'
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


  // quando o clienteMudou (ter acionado o botão: alterar ou salvar)
  function salvarCliente(cliente: Cliente){
    console.log(cliente)
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
              <Botao cor="green" className="mb-4" onClick={() => setVisivel('form')}>Novo cliente</Botao>
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
            cliente={clientes[2]}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          >              
          </Formulario>
        )}     
      </Layout>
    </div>    
  );
}
