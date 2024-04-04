// function formatarNome(nomeCompleto){
//     let nome = nomeCompleto.trim()
//     let arrNome = nome.split(" ")
//
//     return arrNome.reverse().join(", ")
// }
//
// console.log(formatarNome("jonata nery de araujo"))

function formatarNome(nomeCompleto){
    nomecompleto = nomeCompleto.trim()
    let primeiroEspaco = nomeCompleto.lastIndexOf(" ")
    if(primeiroEspaco < 0){
        return nomeCompleto
    }
    let primeiroNome = nomeCompleto.slice(0, primeiroEspaco)
    let sobreNome = nomeCompleto.slice(primeiroEspaco + 1)
    return sobreNome + ", " + primeiroNome
}
console.log(formatarNome("jonata nery de araujo"))
