import Layout from "../components/Layout"
import styles from "../styles/estiloso.module.css"
//import Link from 'next/link'

export default function Estiloso(){
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div>    
                <h1 className={styles.roxo}>Estilo usando CSS Módulos</h1>
                {/* <Link href="/">VOLTAR</Link> */}                
            </div>
        </Layout>
        
    )
}