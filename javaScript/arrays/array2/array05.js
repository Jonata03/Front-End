/*
let arr = [1,2,3]
console.log(arr.reverse())
//coloca o array de tras para frente
//!!mexe no array original

let soma = arr.reduce(function(acumulador,atual){
    //faz um especie de loop
    return acumulador + atual
    //acumulador = 1 + atual = 2
    //acumulador = 3 + atual = 3
    //return 6
})

console.log(soma)
console.log(arr)*/

const nomes = [ 'daniel', 'maria','jaona','joao']
let nomesPorOrdem = nomes.reduce(function (nomes,nomeAtual){
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    }else{
        nomes[primeiraLetra]= 1
    }
    return nomes
},{})
console.log(nomesPorOrdem)