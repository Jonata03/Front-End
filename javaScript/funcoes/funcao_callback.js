// function fn(cb){
//     console.log("executar acao de callback")
//     console.log(typeof cd)
//     typeof cb === "function" && cb()
// }
// function callback(){
//     console.log("funcao passada por parametro")
// }
// fn(callback)
//
// const obj = {
//     callback
// }
// function fn2(n1){
//     return function(n2){
//        return n1*n2
//     }
// }
//
// const funcao2 = fn2(10)
// const mult = funcao2(2)
// obj.callback()
//
// function fn3(){
//     fn3.count++
//     return function _fn3(){
//         console.log("funcao retornada por parametro")
//     }
// }
// fn3.count = 0
// const funcao3 = fn3()
// const funcao3a = fn3()
// const funcao3b = fn3()
// const funcao3d = fn3()
//
// funcao3()
// console.log(fn3.count)

const teste = function (cb){
    console.log("funcao teste")
    console.log(cb)
    typeof  cb === "function" && cb(30)
}
const fn = function (param){
    console.log("funcao anonima de callback")
    console.log(param)
}

teste(fn)