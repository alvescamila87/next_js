import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { firestore } from "../config"; 
import {
    collection,
    doc,
    getDoc,
    setDoc,
    addDoc,
    deleteDoc,
    getDocs,
    QueryDocumentSnapshot,
    SnapshotOptions,
    FirestoreDataConverter
} from 'firebase/firestore';

export default class ColecaoCliente implements ClienteRepositorio {

    // Conversor para FirestoreDataConverter para SDK9
    #conversor: FirestoreDataConverter<Cliente> = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            };
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente {
            const dados = snapshot.data(options);
            return new Cliente(dados.nome, dados.idade, snapshot.id);
        }
    };

    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente?.id) {
            const clienteRef = doc(this.colecao(), cliente.id);
            await setDoc(clienteRef, cliente);
            return cliente;
        } else {
            const clienteRef = await addDoc(this.colecao(), cliente);
            const docSnap = await getDoc(clienteRef);
            return docSnap.data()!;
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        const clienteRef = doc(this.colecao(), cliente.id);
        return deleteDoc(clienteRef);
    }

    async obterTodos(): Promise<Cliente[]> {
        const querySnapshot = await getDocs(this.colecao());
        return querySnapshot.docs.map(doc => doc.data()) ?? [];
    }

    private colecao() {
        return collection(firestore, 'clientes').withConverter(this.#conversor);
    }


    // versão video com SDK 8
    /*#conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options:firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }
    
    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id){
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
        return this.colecao()
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    /*private colecao() {
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor)
            
    }*/  
            
}