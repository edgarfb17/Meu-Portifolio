import {listaProjetos} from "../data/index"

export const filtrarCategoria = (categoria) => {
    return listaProjetos.filter((projeto) => projeto.categoria === categoria) 
}

export const projetosInicio = filtrarCategoria("html/css")