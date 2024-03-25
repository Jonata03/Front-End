let cont= 0
for(let i = 0; cont <= 10; i++){
    let dado1 = parseInt(Math.random() * 6 + 1)
    let dado2 = parseInt(Math.random() * 6 + 1)
    let condicao = (dado2 + dado1) % 2==0
    if (condicao){
        console.log(dado1,dado2)
    }
    cont++
    console.log(i)
}
