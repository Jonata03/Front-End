// (function (){
//     function calculaImc(peso,altura,callback){
//         if (typeof peso !== "number" || typeof altura !== "number") throw Error("only numbers")
//
//         const calculoImc = peso/(altura**2)
//
//         if(typeof callback === "function"){
//             return callback(calculoImc)
//         }
//         return calculoImc
//     }
//     function avaliaPaciente(imc){
//         // if (typeof imc !== "number") throw Error("only numbers")
//         switch (true){
//             case imc < 17: return "palito"
//             case imc < 18.5: return "magro"
//             case imc < 25: return "normal"
//             case imc < 30: return "gordinho"
//             case imc < 35: return "gordo"
//             case imc <=40 : return "nivel planeta"
//             default : return "sua mae"
//         }
//     }
//     const imc = calculaImc(70, 1.78,avaliaPaciente)
//     const imc2 = calculaImc(70,1.78)
//     console.log(imc)
//     console.log(imc2)
// })()
console.log(Object)