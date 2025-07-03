import styles from "./skills.module.css"

export default function Skills(){
    return(
        <section className={styles.section_skills} id="skills">
            <h2 className="alinhamento-conteudo">Skills</h2>
            <div className="alinhamento-conteudo" id={styles.container_skills}>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>Resolução de Problemas</p>
                <p>Design Responsivo</p>
                <p>UML</p>
                <p>Boas práticas</p>
                <p>Metodologias Ágeis</p>
                <p>POO</p>
                <p>Trabalho em Equipe</p>
                <p>Análise de Processos</p>
                <p>Capacidade de Organização</p>
                <p>Procedimentos de Testes</p>
                <p>Git</p>
            </div>
        </section>
    )
}