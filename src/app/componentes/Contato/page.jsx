import styles from "./contato.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Contato(props){
    return(
        <div className="alinhamento-conteudo" id={styles.container_contato}>
          <h2>Contato</h2>

          <div id={styles.links}>
            <Link href="#">
            <Image src={props.wpp} alt="icone whatsapp"></Image>
            (15)988231195
            </Link>

            <Link href="https://github.com/edgarfb17">
            <Image src={props.git} alt="icone github"></Image>
            www.github.com/edgarfb17
            </Link>

            <Link href="https://www.linkedin.com/in/edgarfb/">
            <Image src={props.linkedin} alt="icone linkedin"></Image>
            www.linkedin.com/in/edgarfb/
            </Link>

            <Link href="mailto:edgarfb@outlook.com.br">
            <Image src={props.email} alt="icone email"></Image>
            edgarfb@outlook.com.br
            </Link>
          </div>

        </div>
    )
}