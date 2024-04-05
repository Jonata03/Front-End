let n = 0
setTimeout(function (){
    console.log("timerout depois de 200ms")
}, 2000)

const intervalo = setInterval(function(){
    console.log(`intervalo ${n++}`)
    if(n >= 10){
        clearInterval(intervalo)
    }
},1000)