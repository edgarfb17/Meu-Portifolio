import styles from "./cards.module.css"

export default function Cards(props){
    return(
        <div id={styles.container_card}>
            <div id={styles.container_conteudo}>
                <h3>{props.titulo}</h3>
                <Image src={projeto1} ></Image>
                <p>{props.text}</p>
            </div>
        </div>
    )
}