// function sum(){
//     let valores = arguments
//     valores = Array.from(valores)
//     let soma = 0
//     for(n of valores){
//         soma += n
//     }
//     let dividido = soma / arguments.length
//     return dividido
// }
// // function avarege(){
// //     let
// // }
// console.log(sum(10,10,10))
function sum(){
    const numbers = [...arguments]
    return numbers.reduce(function(sum,atual){
        return sum + atual
    },0)
}
function avarege(){
    return sum(...arguments) / arguments.length
}
