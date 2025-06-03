'use client'
import { useEffect, useState } from "react"


export default function MaquinaDeEscrever({txtRecebido}){
    
    const [ text, setText ] = useState("")
    let i = 0
    let texto = ""

    const escreverTexto = (txtRecebido, texto) => {
        let textoLetras = txtRecebido.split("")
        texto = texto + textoLetras[i]
        setText(texto)
        i++
        console.log(i)
        if(text.length !== txtRecebido.length){
            setTimeout(() => escreverTexto(txtRecebido), 2000)
        }
    }

    useEffect(() => {
        setTimeout(() => escreverTexto(txtRecebido, texto))
    }, [])
    
    return(
        <>{text}</>
    )
}