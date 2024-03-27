function somar(){
    console.log(arguments)
    let total = 0;
    for(let i = 0;i<arguments.length;i++){
        total += arguments[i]
    }
    return total
}

console.log(somar(1,2,4))
console.log(somar(1,2,4,3,45,56,6))
console.log(somar(1,2,4,24,234,23,423,23,432))
console.log(somar(1,2,4,234,32,423,23,4,1232,2,33,23,2))
//esse metodo arguments se adapta ap tamanho dos argumetos passados SEMELHANTE a UM ARRAY, mas NAO IGUAL
//mesmo sem especificar os parametros

//arguments nao funcionam com arrow functions