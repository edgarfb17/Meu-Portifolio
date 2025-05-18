'use client'
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Banner from "../../public/Banner.jpg"
import Sobre from "./componentes/Sobre/page"
import Cards from "./componentes/Cards/page"

export default function Home() {

  const [ projetosFiltrados, setProjetosFiltrados ] = useState(projetosInicio)

  return(
    <div className={styles.page}>
      <header className={styles.header}>
        <nav id={styles.menu_header}>
            <ul>
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Habilidades</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </nav>
        
        <div id={styles.banner_box}>
            <h1>Edgar Fernandes</h1>
            <h2>Desenvolvedor Web</h2>
            <span>23 Anos</span>
            <Image src={Banner}></Image>
        </div>
      </header>
      <main className={styles.main}>
        <Sobre />
        <div id={styles.projetos_container}>
          <h2>Projetos</h2>
            <div id={styles.projetos_cards}>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
       
      </main>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
}
