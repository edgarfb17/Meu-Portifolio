import styles from "./contato.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Contato(props){
    return(
        <div className={`alinhamento-conteudo ${styles.container_contato}`} id="contato">
          <h2>Contato</h2>

          <div id={styles.container_links}>
            <div className={styles.links}>
              <Link href="https://wa.me/5515988231195" target="_blank">
              <Image src={props.wpp} alt="icone whatsapp"></Image>
              (15)988231195
              </Link>
            </div>
            <div className={styles.links}>
              <Link href="https://github.com/edgarfb17" target="_blank">
              <Image src={props.git} alt="icone github"></Image>
              www.github.com/edgarfb17
              </Link>
            </div>
            <div className={styles.links}>
              <Link href="https://www.linkedin.com/in/edgarfb/" target="_blank">
              <Image src={props.linkedin} alt="icone linkedin"></Image>
              www.linkedin.com/in/edgarfb/
              </Link>
            </div>
            <div className={styles.links}>
              <Link href="mailto:edgarfb@outlook.com.br" target="_blank">
              <Image src={props.email} alt="icone email"></Image>
              edgarfb@outlook.com.br
              </Link>
            </div>
          </div>

        </div>
    )
}