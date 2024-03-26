const alunos = [
    {nome:"jonata",notas:[1,2,2,8]},
    {nome:"maria",notas:[10,3,8,6]},
]
// const listaAlunos = document.querySelector("#listaAlunos")
let alunosHTML = null
let media = null
for (let i = 0;i < alunos.length;i++){
    let soma = 0
    for(let j = 0;j < alunos[i].notas.length;j++){
        soma += alunos[i].notas[j]
        media = soma/alunos[i].notas.length
        console.log(media)
    }
    alunosHTML = alunos[i].nome + media
console.log(alunosHTML)
}
