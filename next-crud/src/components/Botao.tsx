interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    // função    
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    // trocar a cor do botão quando não for escolhida a padrão
    const cor = props.cor ?? 'gray'

    return (
        <button 
            onClick={props.onClick}
            className={`
                bg-gradient-to-r from-${cor}-400 to-${cor}-700
                text-white px-4 py-2 rounded-md
                ${props.className}            
        `}>
            {props.children}
        </button>
    )  
}