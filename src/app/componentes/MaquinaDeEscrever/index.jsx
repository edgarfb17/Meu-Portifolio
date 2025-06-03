'use client'
import { useState } from "react"


export function MaquinaDeEscrever({txtRecebido}){
    
    const [ text, setText ] = useState("")

    const escreverTexto = (txtRecebido, i = 0) => {
        let textoLetras = txtRecebido.split("")
        setTimeOut(setText(text + textoLetras[i]),200)
        i++
        if(text.length ==! txtRecebido.length){
            escreverTexto(txtRecebido)
        }
    }
    
    return(
        <div>
            {text}
        </div>
    )
}