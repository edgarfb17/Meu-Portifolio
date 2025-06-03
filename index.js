let txtRecebido = "texto"
let texto = ""
let i = 0

    const escreverTexto = (txtRecebido, txt1, i) => {
        let textoLetras = txtRecebido.split("")
        let txt2 = txt1            
        txt2 = txt2 + textoLetras[i]
        if(texto.length !== txtRecebido.length){
            setTimeout(() => escreverTexto(txtRecebido, txt2, i + 1) , 200)
        }
        return txt2
    }

texto = escreverTexto(txtRecebido, texto, i)
console.log(texto)