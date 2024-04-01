//a principal diferença entre a getElementBy e o querySelector é que o getElementBy alguma coisa retorna uma
//HTMLCollection enquanto o querySelector retorna uma nodeList, a diferença entre os dois é que o htmlColection
//é considerado vivo,ou seja quando o DOM é alterado ele se altera junto, ja uma nodeList é considerada estatica
//e uma vez com o valor atribuido nao consegue ser mudado
const nodeList = document.querySelector("#list li")
const collection = document.getElementById("list").getElementsByTagName("li")

console.log(nodeList)
console.log(collection)
document.querySelector("#list").innerHTML += "<li>item6</li>"

console.log(nodeList)
console.log(collection)
document.querySelector("#list").innerHTML += "<li>item7</li>"

console.log(nodeList)
console.log(collection)

//amanha coloco no html pra confirmar o valor

