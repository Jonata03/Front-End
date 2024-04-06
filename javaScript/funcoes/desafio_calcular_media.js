
(function(){
    "use strict"
    function calculaMedia(){
        //pega o tamanho total dos argumentos da funcao
        let tamanho = arguments.length
        // if (tamanho === 0){
        //     return 0
        // }
        let nota_total = 0
        //varre os argumentos

        for(let i = 0;i<tamanho;i++){
            //compara se ha alguma string no argumento
            if (typeof arguments[i] !== "number"){
                return "ERROR(digite um numero)"
                break
            }
            //faz a soma dos argumentos
            nota_total += arguments[i]
        }
        //retorna a media, caso de um NaN(que é falso) ele retorna 0
        return (nota_total/tamanho) || 0

    }
    const media = calculaMedia(2,6)
    console.log(media)
})()
