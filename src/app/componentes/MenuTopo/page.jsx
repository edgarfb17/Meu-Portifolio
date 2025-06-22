'use client'
import styles from "./menuTopo.module.css"
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export default function MenuTopo({menu, menuToggle}){
    return(
            <nav id={styles.menu_header}>
               <div id={styles.menuButton}>
                    <button onClick={() => menuToggle(menu)} id={styles.iconMenu}>{menu == "on" ? <AiOutlineClose /> : <FiMenu />}</button>
                    <span>{menu == "on" ? "Seções" : "Portifólio"}</span>
               </div> 
                <ul className={menu == "on" ? styles.menuOn : styles.menuOff}>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
    )
}