export default function Cabecalho(props) {
    console.log(props.titulo)

    // props é somente leitura, se precisar modificar, usar useState
    return (
        <header>
            <h1>Title: {props.titulo}</h1>
        </header>
    )
}