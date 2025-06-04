'use client'
import { useEffect, useState } from "react"


export default function MaquinaDeEscrever({txtH1, txtH2}){
    
    //const cursor = document.querySelector(".cursor")
    const [ text1, setText1 ] = useState("edgarfb")
    const [ text2, setText2 ] = useState("dev")

    //const cursorToggle = () => {
    //    setTimeout(() => cursor.classlist.toggle("show"), 100)
    //}

    /*const escreverTexto = (txtRecebido, i = 0) => {
        if(i < txtRecebido.length){
            setText(txtRecebido.slice(0, i + 1))
            setTimeout(() => escreverTexto(txtRecebido, i + 1), 200)
        }
        else{
            setTimeout(() => escreverTexto(txtRecebido, i = 0), 10000)
        }
    }

    useEffect(() => {
        if(txtH2 !== undefined){
            setTimeout(() => escreverTexto(txtH2), 3000)
        }
        else{
            setTimeout(() => escreverTexto(txtH1))
        }
        //while(true){cursorToggle()} 
    }, [])

    

    */
    return(
        <>
        <h1>{text1}</h1>
        <h2>{text2}</h2><span className="cursor">|</span>
        </>
    )
}