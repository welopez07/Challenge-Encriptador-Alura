document.addEventListener("DOMContentLoaded", function(){
    const btnEncriptar = document.querySelector(".btn-encriptar");
    const btnDesencriptar = document.querySelector(".btn-desencriptar");
    const btnCopiar = document.querySelector(".btn-copiar");
    const textarea = document.querySelector(".text-area");   
    const textResultado = document.querySelector(".text-resultado");
    const mensajeCopiado = document.querySelector(".mensaje-copiado");
    const seccionDerMuñeco = document.querySelector(".seccion-der-muñeco");
    const seccionDerParrafo = document.querySelector(".seccion-der-parrafo");
    const seccionDerContResultado = document.querySelector(".seccion-der-cont-resultado");
    const seccionDerBtnCopiar = document.querySelector(".seccion-der-btn-copiar");
  
    
    const encriptarTexto = (texto) => {
        return texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    }

    const desencriptarTexto = (texto) => {
        return texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    }

    const mostrarResultado =(resultado) =>{
        seccionDerMuñeco.style.display = "none";
        seccionDerParrafo.style.display = "none";
        seccionDerContResultado.style.display = "flex";
        textResultado.value = resultado;
        seccionDerBtnCopiar.style.display = "flex";
    };

    btnEncriptar.addEventListener("click", ()=> {
        const texto = textarea.value;
        if(texto){
            const resultado = encriptarTexto(texto);
            mostrarResultado(resultado);
        }
    });

    btnDesencriptar.addEventListener("click", () => {
        const texto = textarea.value;
        if(texto){
            const resultado = desencriptarTexto(texto);
            mostrarResultado(resultado);
        }
    });    

    btnCopiar.addEventListener("click", () => {
       textResultado.select();
       document.execCommand("copy");
       mensajeCopiado.style.display = "block";
       setTimeout(()=>{
            mensajeCopiado.style.display = "none";
       }, 5000);
    });    
});

