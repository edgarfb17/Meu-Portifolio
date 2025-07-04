'use client'
import { useState } from "react";
import { projetosInicio } from "./servico/index"
import { menuTroca } from "./servico"
import { filtrarCategoria } from "./servico";
import { DiAtom } from "react-icons/di";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
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
import LeftBar from "./componentes/LeftBar/page";
import MenuTopo from "./componentes/MenuTopo/page"
import Contato from "./componentes/Contato/page"
import MaquinaDeEscrever from "./componentes/MaquinaDeEscrever/index";

export default function Home() {

  const [ projetosFiltrados, setProjetosFiltrados ] = useState(projetosInicio)
  const [ buttonClick, setButtonClick ] = useState("todas")
  const [ secondComponent, setSecondComponent ] = useState(false)
  const [ menuOpen, setMenuOpen ] = useState("off")


  const changeFilter = (categoria) => {
    setButtonClick(categoria)
    setProjetosFiltrados(filtrarCategoria(categoria))
  }

  const menuToggle = (status) => {
    setMenuOpen(menuTroca(status))
  }

  return(
    <div id={styles.page}>

      <header id={styles.header}>

        <MenuTopo 
        menu={menuOpen}
        menuToggle={menuToggle}
        />
        
        <div id={styles.banner_box}>

          <div className="alinhamento-conteudo" id={styles.banner_txt}>
            <h1><MaquinaDeEscrever setSecondComponent={setSecondComponent} secondComponent={secondComponent} txtRecebido="Edgar Bataglini  "/></h1> 
            <h2>{secondComponent && <MaquinaDeEscrever txtRecebido="Desenvolvedor Front-End"/>}</h2>
          </div>

          <Image src={Banner} alt="imagem banner"></Image>
        </div>

        <LeftBar 
        git={Git}
        wpp={Wpp}
        linkedin={Linkedin}
        email={Email}
        />

      </header>

      <main className={styles.main}>
        <Sobre />

        <section className={styles.section_projetos} id="projetos">
          <div id={styles.icon1}><DiAtom /></div>
          <h2 className="alinhamento-conteudo">Projetos</h2>

          <Categorias 
          changeFilter={changeFilter}
          buttonClick={buttonClick}
          />

          <div className="alinhamento-conteudo" id={styles.projetos_cards}>
            {projetosFiltrados.map((projeto, index) => 
              <Cards key={index} titulo={projeto.titulo} gif={projeto.gif} img={projeto.img} descricao={projeto.descricao} link={projeto.link}/>
              )}  
          </div>

          <div id={styles.icon2}><AiOutlineDeploymentUnit /></div>
          <div id={styles.icon3}><AiOutlineCode /></div>
        </section>

        <Skills />
       
      </main>

      <footer id={styles.footer}>
        <section id={styles.section_footer}> 
          <Contato 
            git={Git}
            wpp={Wpp}
            linkedin={Linkedin}
            email={Email}
          />
        </section>
        <div id={styles.rodape}>
            <p>&copy;2025 Meu portifólio | Desenvolvedor Edgar F.B.</p>
        </div>
      </footer> 
    </div>
  );
}
