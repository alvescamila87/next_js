'use client';
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Madalena', 23, '1'),
    new Cliente('Zebedeu', 24, '2'),
    new Cliente('Ester', 21, '3'),
    new Cliente('Tobias', 25, '4')
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(`Selecionar... ${cliente.nome}`)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir... ${cliente.nome}`)
  }


  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro simples">
        <Tabela 
          clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        >
        </Tabela>
      </Layout>
    </div>    
  );
}
