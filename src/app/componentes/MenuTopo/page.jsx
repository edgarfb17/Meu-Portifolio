import styles from "./menuTopo.module.css"
import Link from "next/link"

export default function MenuTopo(){
    return(
        <nav id={styles.menu_header}>
            <ul>
              <li><Link href="#">Sobre</Link></li>
              <li><Link href="#">Projetos</Link></li>
              <li><Link href="#">Skills</Link></li>
              <li><Link href="#">Contato</Link></li>
            </ul>
        </nav>
    )
}