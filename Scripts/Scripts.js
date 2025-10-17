/* 
-variavel - um pedacinho de memoria do computador para gaurdar o que eu quiser
-funções - um pedacinho de codigo, que só executa quando é chamado.
queryselector (selecionar ou pegar um item do HTML)

*/

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal") 
let mudo = document.querySelector(".botao-mudo")

/*essa parte para ligar o som*/
botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
    video.muted=false   
}
/* essa parte para mostrar modal*/
botao.addEventListener("click", MostrarModal)
modal.addEventListener("click", esconderModal)

function MostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}

mudo.addEventListener("click", desligarSom)

function desligarSom(){
    video.muted=true
}
