import { useState } from "react";

export default function useTabelaOuForm() {

    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    //função
    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    // exportar funções
    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario
    }

}