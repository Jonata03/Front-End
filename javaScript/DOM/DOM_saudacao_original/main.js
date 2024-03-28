(function(){
    let elemento = document.querySelector(".top-bar p");
    const nomeUsuario = null

    if(nomeUsuario){
        console.log(elemento.textContent)
        elemento.innerHTML += `<b>${nomeUsuario}</b>`
    }else{
        // let elemento = document.querySelector(".top-bar");
        //parentElement pega o pai do paragrafo
        // elemento.parentElement.style.display = "none" (REMOVE APARTIR DO STYLE)
        // elemento.parentElement.remove();(REMOVE A TAG DIRETAMENTE)
        //para acessar o filho seria pai.children
    }
})()
