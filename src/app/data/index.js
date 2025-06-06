import BarbaRussa_g from "../../../public/ProjetoBarber.gif"
import BarbaRussa_i from "../../../public/ProjetoBarber.png"
import Monks_g from "../../../public/ProjetoMonks.gif"
import Monks_i from "../../../public/ProjetoMonks.png"
import Restaurant_g from "../../../public/ProjetoRestaurant.gif"
import Restaurant_i from "../../../public/ProjetoRestaurant.png"
import Clinica_g from "../../../public/ProjetoClinica.gif"
import Clinica_i from "../../../public/ProjetoClinica.png"
import Design_g from "../../../public/ProjetoDesign.gif"
import Design_i from "../../../public/ProjetoDesign.png"
import Pousada_g from "../../../public/ProjetoPousada.gif"
import Pousada_i from "../../../public/ProjetoPousada.png"
import Rocky_g from "../../../public/ProjetoRocky.gif"
import Rocky_i from "../../../public/ProjetoRocky.png"
import Viagens_g from "../../../public/ProjetoViagens.gif"
import Viagens_i from "../../../public/ProjetoViagens.png"

export const listaProjetos = [
    {
        titulo: "Barbearia Barba Russa",
        gif: BarbaRussa_g,
        img: BarbaRussa_i,
        categorias: ["html/css", "js", "todas"],
        descricao: `Projeto freelancer que fiz, para a divulgação de uma barbearia
        da minha cidade usando ${tecnologias[0] + tecnologias[1]} uma boa experiência para consolidação
        de todos meus conhecimentos até o momento.`
    },

    {
        titulo: "Monks.",
        gif: Monks_g,
        img: Monks_i,
        categorias: ["html/css", "js", "todas"],
        descricao: `Projeto que fiz para processo seletivo, usando ${tecnologias[0] + tecnologias[1]}
        projeto bem parecido com o Rocky, com mais prática consegui executar algo mais
        bem estruturado e limpo, com algumas experiências novas como manipulação de vetores e Grid layout.`
    },

    {
        titulo: "Restaurant",
        gif: Restaurant_g,
        img: Restaurant_i,
        categorias: ["react", "todas"],
        descricao: `Projeto acadêmico que fiz usando ${tecnologias[2]} obtive experências como componentização, 
        variáveis de estado e funções nativas.`
    },

    {
        titulo: "Clinica CM Life",
        gif: Clinica_g,
        img: Clinica_i,
        categorias: ["html/css", "todas"],
        descricao: `Projeto acadêmico que fiz usando ${tecnologias[0]} para consolidação de experiências 
        como Flex Box, postagem de sites e navegação entre páginas`
    },

    {
        titulo: "Agência de Design",
        gif: Design_g,
        img: Design_i,
        categorias: ["react", "todas"],
        descricao: `Projeto acadêmico que fiz usando ${tecnologias[2]} obtive experências como componentização e 
        variáveis de estado.` 
    },
    
    {
        titulo: "Pousada Secreta",
        gif: Pousada_g,
        img: Pousada_i,
        categorias: ["html/css", "todas"],
        descricao: `Projeto acadêmico que fiz usando ${tecnologias[0]} para consolidação de experiências 
        como layout responsivo e navegação entre páginas.`  
    },

    {
        titulo: "Rocky",
        gif: Rocky_g,
        img: Rocky_i,
        categorias: ["html/css", "todas"],
        descricao: `Projeto que fiz para o processo seletivo, usando ${tecnologias[0]}
         obtive experiências em animações de layout, design responsivo e formularios, 
         uma das minhas primeiras experiências relacionando HTML, CSS com JS.`
    },

    {
        titulo: "Agência de Viagens",
        gif: Viagens_g,
        img: Viagens_i,
        categorias: ["html/css", "todas"],
        descricao: `Projeto acadêmico que fiz usando ${tecnologias[0]} para consolidação
         de experiências como Flex Box, formularios e postagem de sites`
    },
]