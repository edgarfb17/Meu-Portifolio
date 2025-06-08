import styles from "./cards.module.css"
import Image from "next/image"

///let html = document.createElement("span")
//html.innerHTML = "HTML, CSS"
///let js = document.createElement("span")
//html.innerHTML = "JS"
///let react = (<span style='font-weigth: bold'></span>)

 //(<span style='font-weigth: bold'>"JS"</span>), (<span style='font-weigth: bold'>"React.js"</span>)]
console.log(tecnologias)
export default function Cards(props){

    const tecnologias = (
    <span>
        {"HTML, CSS"}
    </span>
)
    return(
        <div id={styles.container_card}>
            <h3>{props.titulo}</h3>
            <div id={styles.container_imgs}>
                <Image id={styles.gif_projeto} src={props.gif} alt="gifs projetos"></Image>
                <Image id={styles.img_projeto} src={props.img} alt="img projeto"></Image>
            </div>
            <div id={styles.container_descricao}>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}