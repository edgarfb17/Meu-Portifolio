import styles from "./cards.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Cards(props){
    return(
        <div id={styles.container_position}>
            <div id={styles.container_card}>
                <h3>{props.titulo}</h3>
                <div id={styles.container_imgs}>
<<<<<<< HEAD
                    <Link href={props.link} id={styles.link_projeto} target="_blank"><Image id={styles.gif_projeto} src={props.gif} alt="gifs projetos"></Image></Link>
=======
                    <Link href="#" id={styles.link_projeto}><Image id={styles.gif_projeto} src={props.gif} alt="gifs projetos"></Image></Link>
>>>>>>> 3ad6dd6134407738b39b2632e76eb3428f672571
                    <Image id={styles.img_projeto} src={props.img} alt="img projeto"></Image>
                    <span>Clique na imagem para ver o projeto</span>
                </div>
                <div id={styles.container_descricao}>
                    <p>{props.descricao}</p>
                </div>
            </div>
        </div>
    )
}