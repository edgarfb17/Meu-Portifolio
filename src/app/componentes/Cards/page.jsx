import styles from "./cards.module.css"
import Image from "next/image"

export default function Cards(props){
    return(
        <div id={styles.container_card}>
            <h3>{props.titulo}</h3>
            <div id={styles.container_imgs}>
                <Image id={styles.gif_projeto} src={props.gif} alt="gifs projetos"></Image>
                <Image id={styles.img_projeto} src={props.img} alt="img projeto"></Image>
            </div>
            <p>{props.descricao}</p>
        </div>
    )
}