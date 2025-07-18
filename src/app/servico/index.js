import {listaProjetos} from "../data/index"

export const filtrarCategoria = (categoria) => {
    return listaProjetos.filter((projeto) =>{
        for( let Pcategoria of projeto.categorias) {
            if(Pcategoria === categoria){
                return true
            }
        }
    })
}

export const menuTroca = (status) => {return status === "on" ? "off" : "on"}

export const projetosInicio = listaProjetos