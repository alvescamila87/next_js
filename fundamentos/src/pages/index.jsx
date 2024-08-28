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
      <Navegador textoDoLink="Navegação #02" destino="/cliente/saopaulo-113/123" cor="blue"/>
      <Navegador textoDoLink="#04 - Componente com estado" destino="/estado" cor="pink"/>
      <Navegador textoDoLink="#05 - Integração com API #01" destino="/integracao_1" cor="yellow"/>
    </div>
  )
}