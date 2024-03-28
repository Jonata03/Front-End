let arr = [1,2,5,7,9]
let pushed = arr.push(11,14, true,"ola")

console.log(pushed)
console.log(arr)

let ultimoItem = arr.pop()
console.log(ultimoItem
)

let primeiroItem = arr.shift()
console.log(primeiroItem)
console.log(arr)

pushed = arr.unshift(4,5,6)
console.log(teste)
console.log(arr)

let arr2 = arr.slice(2,4)
console.log(arr2)
console.log(arr)

let arr2 = arr.slice(2,4)
//slice faz um recorte do array do indice 2 ate o 4, mas o 4 nao entra no recorte ele morre no 3
//se noa colocar o valor final ele faz o recorte do inicio estabelecido ate o final
console.log(arr2)
console.log(arr)

let arr3 = arr.splice(2,4,"ola mundo", 3,2,2,2)
// splice(começo,quantidadeAdeletar,adicionar)
//ele modifica o array original, ou seja é perigoso
console.log(arr)
console.log(arr3)