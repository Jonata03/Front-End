function getRandomNumber(inicio = 0, fim = 1, integer = true){
    // inicio = inicio || 0
    // fim = fim || 1
    // //ambas as variaveis sao para colocar como padrao valores de inicio e fim

    // let randValor = 0
    // if (integer){
    //     randValor = Math.random() * (fim - inicio) + inicio
    //     randValor = Math.round(randValor)
    // }else{
    //     randValor = Math.random() * (fim - inicio) + inicio
    // }
    let randValor = integer?Math.floor(Math.random() * (fim - inicio) + inicio)
        :  Math.random() * (fim - inicio) + inicio
    return randValor
}

console.log(getRandomNumber(1,10))
console.log(getRandomNumber(1,100,false))
console.log(getRandomNumber(1,1000))