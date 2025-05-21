'use client'
import { useState } from "react";
import { projetosInicio } from "./servico/index"
import Image from "next/image";
import styles from "./page.module.css";
import Banner from "../../public/Banner.jpg"
import Sobre from "./componentes/Sobre/page"
import Cards from "./componentes/Cards/page"
import Categorias from "./componentes/Categorias/page";
import { filtrarCategoria } from "./servico";

export default function Home() {

  const [ projetosFiltrados, setProjetosFiltrados ] = useState(projetosInicio)
  const [ buttonClick, setButtonClick ] = useState("html/css")

  const changeFilter = (categoria) => {
    setButtonClick(categoria)
    setProjetosFiltrados(filtrarCategoria(categoria))
  }

  return(
    <div className={styles.page}>
      <header className={styles.header}>
        <nav id={styles.menu_header}>
            <ul>
                <li>Sobre</li>
                <li>Habilidades</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </nav>
        
        <div id={styles.banner_box}>
            <h1>Edgar Fernandes</h1>
            <h2>Desenvolvedor Web</h2>
            <Image src={Banner} alt="imagem banner"></Image>
        </div>
      </header>
      <main className={styles.main}>
        <Sobre />
        <div id={styles.projetos_container}>
          <h2>Projetos</h2>
          <Categorias 
          changeFilter={changeFilter}
          buttonClick={buttonClick}
          />
            <div id={styles.projetos_cards}>
              {projetosFiltrados.map((projeto, index) => 
                <Cards key={index} titulo={projeto.titulo} gif={projeto.gif} descricao={projeto.descricao}/>
                )}  
            </div>
        </div>
       
      </main>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
}
