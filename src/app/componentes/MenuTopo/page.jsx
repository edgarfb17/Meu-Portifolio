import styles from "./menuTopo.module.css"

export default function MenuTopo(){
    return(
            <nav id={styles.menu_header}>
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
    )
}