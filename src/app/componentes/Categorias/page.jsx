import styles from "./categorias.module.css"

export default function Categorias({changeFilter, buttonClick}){
    return(
        <div id={styles.container_categorias}>
            <button onClick={() => changeFilter("html/css")} className={buttonClick === "html/css" ? styles.btnAcesso : styles.btnApagado}>HTML/CSS</button>
            <button onClick={() => changeFilter("js")} className={buttonClick === "js" ? styles.btnAcesso : styles.btnApagado}>JS</button>
            <button onClick={() => changeFilter("react")} className={buttonClick === "react" ? styles.btnAcesso : styles.btnApagado}>React</button>
        </div>
    )
}