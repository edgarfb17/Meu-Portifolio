import styles from "./leftBar.module.css"
import Link from "next/link"
import Image from  "next/image"

export default function LeftBar(props){
    return(
        <div id={styles.container_left_bar}>
            <Link id={styles.link_wpp} href="#">
            <Image src={props.wpp} alt="icone whatsapp"></Image>
            </Link>

            <Link id={styles.link_git} href="https://github.com/edgarfb17">
            <Image src={props.git} alt="icone github"></Image>
            </Link>

            <Link id={styles.link_linkedin} href="https://www.linkedin.com/in/edgarfb/">
            <Image src={props.linkedin} alt="icone linkedin"></Image>
            </Link>

            <Link id={styles.link_email} href="mailto:edgarfb@outlook.com.br">
            <Image src={props.email} alt="icone email"></Image>
            </Link>
        </div>
    )
}