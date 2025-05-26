'use client'
import { useState } from "react";
import { projetosInicio } from "./servico/index"
import { filtrarCategoria } from "./servico";
import Link from "next/link"
import Image from "next/image";
import styles from "./page.module.css";
import Banner from "../../public/Banner.jpg"
import Git from "../../public/githubIcon.svg"
import Wpp from "../../public/whatsappIcon.svg"
import Email from "../../public/emailIcon.svg"
import Linkedin from "../../public/linkedinIcon.svg"
import Sobre from "./componentes/Sobre/page"
import Cards from "./componentes/Cards/page"
import Categorias from "./componentes/Categorias/page";
import Skills from "./componentes/Skills/page"

export default function Home() {

  const [ projetosFiltrados, setProjetosFiltrados ] = useState(projetosInicio)
  const [ buttonClick, setButtonClick ] = useState("html/css")

  const changeFilter = (categoria) => {
    setButtonClick(categoria)
    setProjetosFiltrados(filtrarCategoria(categoria))
  }

  return(
    <div id={styles.page}>

      <header id={styles.header}>

        <nav id={styles.menu_header}>
            <ul>
              <li><Link href="#">Sobre</Link></li>
              <li><Link href="#">Projetos</Link></li>
              <li><Link href="#">Skills</Link></li>
              <li><Link href="#">Contato</Link></li>
            </ul>
        </nav>
        
        <div id={styles.banner_box}>

          <div className="alinhamento-conteudo" id={styles.banner_txt}>
            <h1>Edgar Fernandes</h1>
            <h2>Desenvolvedor Web</h2>
          </div>

          <Image src={Banner} alt="imagem banner"></Image>
        </div>

      </header>

      <main className={styles.main}>
        <Sobre />

        <div id={styles.section_projetos}>

          <h2 className="alinhamento-conteudo">Projetos</h2>
          <Categorias 
          changeFilter={changeFilter}
          buttonClick={buttonClick}
          />

            <div className="alinhamento-conteudo" id={styles.projetos_cards}>
              {projetosFiltrados.map((projeto, index) => 
                <Cards key={index} titulo={projeto.titulo} gif={projeto.gif} descricao={projeto.descricao}/>
                )}  
            </div>

        </div>

        <Skills />
       
      </main>

      <footer id={styles.footer}>
        <div className="alinhamento-conteudo" id={styles.container_contato}>
          <h2>Contato</h2>

          <div id={styles.links}>
            <Link href="#">
            <Image src={Wpp} alt="icone whatsapp"></Image>
            (15)988231195
            </Link>

            <Link href="https://github.com/edgarfb17">
            <Image src={Git} alt="icone github"></Image>
            www.github.com/edgarfb17
            </Link>

            <Link href="https://www.linkedin.com/in/edgarfb/">
            <Image src={Linkedin} alt="icone linkedin"></Image>
            www.linkedin.com/in/edgarfb/
            </Link>

            <Link href="mailto:edgarfb@outlook.com.br">
            <Image src={Email} alt="icone email"></Image>
            edgarfb@outlook.com.br
            </Link>
          </div>

        </div>

        <div className="alinhamento-conteudo" id={styles.rodape}>
            <p>&copy;2025 Meu portifólio | Desenvolvedor Edgar F.B.</p>
        </div>
      </footer>
    </div>
  );
}
