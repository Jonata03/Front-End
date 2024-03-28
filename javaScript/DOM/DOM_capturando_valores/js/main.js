    const txtEmail = document.getElementById("txtEmail")
    const texto = document.querySelector("#newsletterFeedback")
    function cadastrarEmail(){
        let email = txtEmail.value
        console.log(email)
        if (email !== ""){
            texto.innerHTML = `<p>Email ${email} Cadastrado com sucesso</p>`
        }else{
            texto.innerHTML = `<p>Digite um email</p>`
            
        }
    }
