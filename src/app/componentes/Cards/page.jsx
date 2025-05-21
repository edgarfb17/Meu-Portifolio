import styles from "./cards.module.css"
import Image from "next/image"

export default function Cards(props){
    return(
        <div id={styles.container_card}>
            <h3>{props.titulo}</h3>
            <Image src={props.gif} alt="gifs projetos"></Image>
            <p>{props.descricao}</p>
        </div>
    )
}