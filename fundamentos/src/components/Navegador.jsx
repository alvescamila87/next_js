import Link from "next/link"
import sytles from '../styles/Navegador.module.css'

export default function Navegador(props) {
    return (
        <Link href={props.destino}>           
            <div className={sytles.navegador} style={{
                backgroundColor: props.cor ?? 'dodgerblue'
            }}>
                {props.textoDoLink} 
            </div>
        </Link>        
    )
}