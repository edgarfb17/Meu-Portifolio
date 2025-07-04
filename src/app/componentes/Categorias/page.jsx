'use client'
import styles from "./categorias.module.css"
import Image from "next/image"
import HtmlCss from "../../../../public/HtmlCss.png"
import Js from "../../../../public/js.png"
import React from "../../../../public/react.png"

export default function Categorias({changeFilter, buttonClick}){
    return(
        <div className="alinhamento-conteudo" id={styles.container_categorias}>
            <button onClick={() => changeFilter("todas")} className={buttonClick === "todas" ? styles.btnAcesso : styles.btnApagado}><h3>Todas</h3></button>
            <button onClick={() => changeFilter("html/css")} className={buttonClick === "html/css" ? styles.btnAcesso : styles.btnApagado}><Image src={HtmlCss  ?? ''} alt="icon html/css"></Image><h3>HTML/CSS</h3></button>
            <button onClick={() => changeFilter("js")} className={buttonClick === "js" ? styles.btnAcesso : styles.btnApagado}><Image src={Js  ?? ''} alt="icon js"></Image><h3>JavaScript</h3></button>
            <button onClick={() => changeFilter("react")} className={buttonClick === "react" ? styles.btnAcesso : styles.btnApagado}><Image src={React  ?? ''} alt="icon react"></Image><h3>React</h3></button>
        </div>
    )
}