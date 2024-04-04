let str1 = "minha string bacanuda"
// console.log(str1.replace(/i/g,"o"))
// console.log(str1)

// console.log(str1.indexOf("adadasd"))
// console.log(str1.includes("adadasd"))
// console.log(str1.indexOf("adadasd"))
// console.log(str1.indexOf("adadasd") >= 0)
//
// console.log(str1.slice(2, 7))
// console.log(str1.substring(2, 7))
//
// console.log(str1.slice(-5, -2))
// console.log(str1.substring(-5, -2))
//
// let strObj = new String("minha string como objeto ")
//
// console.log(strObj.valueOf())

//todos os trim removem os espaços vazios

// str1 = "     " + str1 + "      "
//
// console.log(str1)
// console.log(str1.trim())
// console.log(str1.trimEnd())
// console.log(str1.trimStart())
//
// //tbm funciona com quebras de linha
//
// str1 = "0123456789"
// console.log(str1.padStart(10,"-"))
// console.log(str1.padEnd(20,"-"))
// console.log(str1)

// let telefone = "98765-4345"
// function escondeTelefone(numero){
//     let hifemPosicao = numero.indexOf("-")
//     let numeroInicio = numero.slice(0,hifemPosicao)
//     let numeroFinal = numero.slice(hifemPosicao+1)
//
//     let digitosFinais = numeroFinal.slice(-2)
//
//     return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${digitosFinais.padStart(numeroFinal.length,"*")}`
// }
//
// console.log(escondeTelefone(telefone))

// let str2 = "hoje é sabado"
// console.log(str2.startsWith("hoje",1))// o segundo argumento mostra onde deve começar a procurar
// console.log(str2.endsWith("hoje"))

let str3 = "abcdefgh"
console.log(str3.charAt(1))
console.log(str3[1])
console.log(str3.charCodeAt(0))
console.log(str3.charCodeAt(1))
