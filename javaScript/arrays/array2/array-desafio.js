//fazer um array de numeros repetidos ter os numeros ainda porem nao repetidos usando o metodo reduce
//ao meu ver da pra usar o .includs pra conferir se o numero ja esta no array
//obs nao é certeza
//é pra usar reduce
const numeros = [1,2,2,4,5,6,7,6,1,2,2,3,4,3,]
/*
let numerosUnicos = []
let numerosRepetidos = numeros.reduce(function (numeros,numeroAtual){
    if(!numerosUnicos.includes(numeroAtual)){
        numerosUnicos.push(numeroAtual)
        console.log(numerosUnicos)
    }
    return numerosUnicos
},{})
console.log(numerosRepetidos)*/

//RESOLUÇÃO
const numerosUnicos = numeros.reduce(function(numerosUnicos, numeroAtual){
    if(numerosUnicos.indexOf(numerosUnicos) < 0){
        numerosUnicos.push(numeroAtual)
    }
    return numerosUnicos
},[])