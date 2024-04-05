(function () {
    const contador = document.querySelector(".hero-content p")

    const hoje = new Date();
    const finalDoAno = new Date(hoje.getFullYear(), 7, 21);
    const diferencaEmMilissegundos = finalDoAno - hoje;
    const diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    
    const hora = 24 - hoje.getHours()
    
    const minutos = 60 - hoje.getMinutes()
    console.log(minutos)
    const segundos = 60 - hoje.getSeconds()
    // console.log(`Faltam ${diferencaEmDias} dias para o final do ano.`);
    contador.innerHTML+=`${diferencaEmDias} Dias, ${hora} Horas, ${minutos} Minutos, ${segundos} Segundos `
})()