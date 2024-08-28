//import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Inicio(){
  return (
    //estilo interno
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador textoDoLink="Estiloso" destino="/estiloso" />
      <Navegador textoDoLink="Exemplo" destino="/exemplo" cor="#8a2be2"/>
      <Navegador textoDoLink="JSX" destino="/jsx" cor="crimson"/>
      <Navegador textoDoLink="Navegação #01" destino="/navegacao" cor="green"/>
    </div>
  )
}