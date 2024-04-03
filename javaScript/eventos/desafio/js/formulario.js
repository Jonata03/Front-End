const btnAdicionar = document.getElementById("btn")
const feedbackMessage = document.getElementById("feedbackMessage")
const btnFecharFeedback = feedbackMessage.querySelector("button")
const feedBackTexto = feedbackMessage.querySelector("p")
const caracteresDescricao = document.getElementById("txtDescricao")
const totalLetras = document.querySelector("#contador span")
const titulo = document.getElementById("txtTitulo")
const descricao = document.getElementById("txtDescricao")
const formCadastro = document.querySelector(".formCadastro")
const check = document.querySelector("input[type='checkbox']")

formCadastro.addEventListener("submit",function(e){
    let txtTitulo = titulo.value
    let txtDescricao = descricao.value
    if(txtDescricao === "" && txtTitulo === ""){
        e.preventDefault()
        titulo.focus()
        feedback(7)
        feedbackTxt("Adicione um titulo e uma descrição")
    }
    else if (txtDescricao === ""){
        e.preventDefault()
        descricao.focus()
        feedback(7)
        feedbackTxt("Por gentileza adicione uma descrição")
    }
    else if(txtTitulo === ""){
        e.preventDefault()
        feedback(7)
        feedbackTxt("Coloque o titulo")
    }
    else{
        feedback(1)
    }
})
caracteresDescricao.addEventListener("input",quantidadeCaractere)

// caracteresDescricao.addEventListener("keydown",quantidadeCaractere)
check.addEventListener("change",function(){
    console.log(check.checked)
    btnAdicionar.disabled = !this.checked
})
btnFecharFeedback.addEventListener("click",function(){
    feedback(1)
})

function quantidadeCaractere(){
    totalLetras.innerHTML = (parseInt(caracteresDescricao.maxLength) - parseInt(caracteresDescricao.value.length))
}
function feedbackTxt(texto){
    feedBackTexto.innerText = texto
}
function feedback(valor){
    feedbackMessage.style.top = `${valor}rem`
    feedbackMessage.style.transition = ".3s"
}
