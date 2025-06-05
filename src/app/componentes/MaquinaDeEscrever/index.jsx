'use client'
import { useEffect, useState } from "react"
import styles from "./maquinaDeEscrever.module.css"

export default function MaquinaDeEscrever({txtRecebido, setSecondComponent}){
    
    const [text, setText] = useState("")
    const [cursor, setCursor] = useState("|")

    const escreverTexto = (txtRecebido, i = 0) => {
        if(i < txtRecebido.length){
            setCursor("|")
            setText(txtRecebido.slice(0, i + 1))
            setTimeout(() => escreverTexto(txtRecebido, i + 1), 200)
        }
        else{
            setTimeout(() => escreverTexto(txtRecebido, i = 0), 3500)
            setCursor("")
            setSecondComponent(true)
        }
    }

    useEffect(() => {
        escreverTexto(txtRecebido)
    }, [])

    

    return(
        <>
        {text}<span id={styles.cursor}>{cursor}</span>
        </>
    )
}