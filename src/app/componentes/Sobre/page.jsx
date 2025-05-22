import styles from "./sobre.module.css"
import Image from "next/image"
import Perfil from "../../../../public/Perfil.jpeg"

export default function Sobre(){
    return(
        <div id={styles.section_sobre}>
            <div className="alinhamento-conteudo" id={styles.container_sobre}>
                <div id={styles.container_txt}>
                    <h2>Sobre</h2>
                    <p> 
                        Olá me chamo Edgar e tenho 23 Anos, pretendo entrar
                        na área de Desenvolvimento Web pois gosto muito de
                        computadores e resolver problemas, quero cursar mais
                        cursos para me especializar melhor. Estou procurando
                        qualquer serviço nessa área para aumentar meu
                        conhecimento e experiência. Estou cursando atualmente
                        faculdade de Análise e Desenvolvimento de Sistemas, e
                        tenho ampliado bastante meu conhecimento em front-end
                        com cursos, planos de estudo e projetos pessoais. 
                    </p>
                </div>
                <Image src={Perfil}></Image>
            </div>
        </div>
    )
}