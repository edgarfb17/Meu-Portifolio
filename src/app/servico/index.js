import listaProdutos from "../data/index"

export const filtrarCategoria = (categoria) => {
    return listaProdutos.filter((projeto) => projeto.categoria === categoria) 
}