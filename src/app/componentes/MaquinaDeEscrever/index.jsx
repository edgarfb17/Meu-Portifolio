'use client'
import { useEffect, useState } from "react"


export default function MaquinaDeEscrever(props){
    
    //const cursor = document.querySelector(".cursor")
    const txtsRecebidos = [props.txtH1, props.txtH2]
    const [txts, setTxts] = useState(["", ""])
    const arrayTxts = []
    //const cursorToggle = () => {
    //    setTimeout(() => cursor.classlist.toggle("show"), 100)
    //}

    const escreverTexto = (txtRecebido, indexTxt, i = 0) => {
        console.log("escrever")
        if(i < txtRecebido.length){
            arrayTxts[indexTxt] = txtRecebido.slice(0, i + 1)
            console.log(arrayTxts)
            setTxts(arrayTxts)
            setTimeout(() => escreverTexto(txtRecebido, indexTxt, i + 1), 200)
        }
    }

    useEffect(() => {
       // for(let index in txtsRecebidos){
           // console.log("for")
            escreverTexto(txtsRecebidos[1], 1)
            console.log(txtsRecebidos[1])
           // break
        //}
        //while(true){cursorToggle()} 
    }, [])

    

    return(
        <>
        <h1>{txts[0]}</h1>
        <h2>{txts[1]}</h2><span className="cursor">|</span>
        </>
    )
}