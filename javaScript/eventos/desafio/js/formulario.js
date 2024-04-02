const btnAdicionar = document.getElementById("btn")
const feedbackMessage = document.getElementById("feedbackMessage")
const btnFecharFeedback = feedbackMessage.querySelector("button")
const feedBackTexto = feedbackMessage.querySelector("p")
const caracteresDescricao = document.getElementById("txtDescricao")
const totalLetras = document.querySelector("#contador span")

function quantidadeCaractere(){
    totalLetras.innerHTML = (parseInt(caracteresDescricao.maxLength) - parseInt(caracteresDescricao.value.length))
}
function salvar(){
    const titulo = document.getElementById("txtTitulo")
    let txtTitulo = titulo.value
    const descricao = document.getElementById("txtDescricao")
    let txtDescricao = descricao.value
    if(txtDescricao === "" && txtTitulo === ""){
        feedback(7)
        feedbackTxt("Adicione um titulo e uma descrição")
    }
    else if (txtDescricao === ""){
        feedback(7)
        feedbackTxt("Por gentileza adicione uma descrição")
    }
    else if(txtTitulo === ""){
        feedback(7)
        feedbackTxt("Coloque o titulo")
    }
    else{
        feedback(1)
    }
}
caracteresDescricao.addEventListener("keypress",quantidadeCaractere)
caracteresDescricao.addEventListener("keydown",quantidadeCaractere)
btnAdicionar.addEventListener("keyup", salvar)

btnAdicionar.addEventListener("click",function(e){
    e.preventDefault()
    salvar()
})
const check = document.querySelector("input[type='checkbox']")
check.addEventListener("change",function(){
    console.log(check.checked)
    btnAdicionar.disabled = !this.checked
})

btnFecharFeedback.addEventListener("click",function(){
    feedback(1)
})
function feedbackTxt(texto){
    feedBackTexto.innerText = texto
}
function feedback(valor){
    feedbackMessage.style.top = `${valor}rem`
    feedbackMessage.style.transition = ".3s"
}
