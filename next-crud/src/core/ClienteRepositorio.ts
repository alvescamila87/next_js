import Cliente from "./Cliente";

/**
 * Interface faz com que não seja 'necessário saber' que está sendo trabalhado com 
 * Firebase
 */
export default interface ClienteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}