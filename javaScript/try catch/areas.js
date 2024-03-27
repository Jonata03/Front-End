function calcularAreaRetangulo(l, a){
    if(typeof l !== "number" || typeof  l !== "number"){
        throw new Error("aceita dois parametros do tipo number")
    }
    return l * a;
}function calcularAreaTriangulo(l, a){
    if(typeof l !== "number" || typeof  l !== "number"){
        throw new Error("aceita dois parametros do tipo number")
    }
    return (b * a) /2;
}

function calcularAreaCirculo(r){
    if(typeof r !== "number"){
        throw new Error("os argumentos precisam ser do tipo number")
    }
    return Math.PI * (r**2)

}