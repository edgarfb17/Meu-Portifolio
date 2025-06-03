'use client'
import { useEffect, useState } from "react"


export default function MaquinaDeEscrever({txtRecebido}){
    
    const [ text, setText ] = useState("")

    const escreverTexto = (txtRecebido, i = 0) => {
        if(i < txtRecebido.length){
            setText(txtRecebido.slice(0, i + 1))
            setTimeout(() => escreverTexto(txtRecebido, i + 1), 2000)
        }
    }

    do{
        useEffect(() => {
        setTimeout(() => escreverTexto(txtRecebido))
    }, [])
        setText("")
    }while(true);
    
    
    return(
        <>{text}</>
    )
}