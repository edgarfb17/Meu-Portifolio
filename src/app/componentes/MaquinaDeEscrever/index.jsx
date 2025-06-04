'use client'
import { useEffect, useState } from "react"


export default function MaquinaDeEscrever({txtH1, txtH2}){
    
    const txts = [txtH1, txtH2]
    const [ text, setText ] = useState("")

    const escreverTexto = (txtRecebido, i = 0) => {
        if(i < txtRecebido.length){
            setText(txtRecebido.slice(0, i + 1))
            setTimeout(() => escreverTexto(txtRecebido, i + 1), 200)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            while(true){
                for(let txt of txts){
                    console.log(txts)
                    escreverTexto(txt)
                    }
                    setText("") 
            } 
        })
    }, [])

    
    return(
        <>{text}</>
    )
}