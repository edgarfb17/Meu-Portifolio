import styles from "./sobre.module.css"
import Image from "next/image"
import Perfil from "../../../../public/Perfil.jpeg"
import { DiCode } from "react-icons/di";
import { DiIonic } from "react-icons/di";

export default function Sobre(){
    return(
        <section className={styles.section_sobre} id="sobre">
            <div id={styles.icon1}><DiCode /></div>
            <div className="alinhamento-conteudo" id={styles.container_sobre}>
                <div id={styles.container_txt}>
                    <h2>Sobre</h2>
                    <p> 
                       Olá, me chamo Edgar tenho 23 anos, atualmente estou no último 
                       ano de Análise e Desenvolvimento de Sistemas, quero atuar como 
                       Desenvolvedor FullStack sou apaixonado por tecnologia desde pequeno, 
                       estou fazendo também plano de estudo e cursos por fora, com foco 
                       em FullStack, tenho feito projetos Freelancers, pessoais e acadêmicos 
                       a fim de consolidar e melhorar meus conhecimentos e experiências na 
                       área, tenho certeza de que consigo contribuir com um time e assim 
                       entregar ótimas soluções para nossa sociedade. 
                    </p>
                </div>
                <Image src={Perfil} alt="Foto de Perfil"></Image>
            </div>
            <div id={styles.icon2}><DiIonic /></div>
        </section>
    )
}