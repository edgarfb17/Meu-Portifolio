'use client'
import { useState } from "react"


export function MaquinaDeEscrever({txtRecebido}){
    
    const [ text, setText ] = useState("")

    const escreverTexto = (txtRecebido) => {
        let textoLetras 
        //setTimeOut( ,200)
    }
    
    return(
        <div>
            {text}
        </div>
    )
}