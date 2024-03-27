//funcoes auto-invocaveis
//servem para impedir que as funçoes poluam o escopo global, gerando um escopo isolado
//iife
(function(){
    let isValid = false
    console.log("init menu",isValid)
    function init(){
        console.log("init do menu")
    }
    init()
})()

//assim que o js ler esse codigo ja vai invocar a funçao

(function(n1,n2){
    "use strict"
    //se voce esquecer de declarar a variavel e atribuir um valor pra ela, essa variavel sera vazada para o escopo global
    //por isso usa-se o use strict
    let isValid = true
    console.log("init menu",isValid)
    function init(){
        console.log("init do menu")
    }
    init()
})(1,2)