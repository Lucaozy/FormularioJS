const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome está vazio.
    if (nameInput.value === "") {
        alert("É necessário inserir um nome.");
        return;
    }
//VALIDAÇÃO DO EMAIL AQUI
    if (emailInput.value === "" || !isEmailValid(emailInput.value) ){
        alert("É necessário inserir um e-mail.");
        return;
    }
//VALIDAÇÃO DA SENHA AQUI
    if (!validaPassword(passwordInput.value)) {
        alert("A senha precisa ter no mínimo 8 dígitos.");
        return;
    }
//VALIDAÇÃO SELETOR JOB
    if(jobSelect.value === ""){
        alert("Selecione uma situação.")
        return;
    }
//VALIDAÇÃO TEXT AREA MENSAGEM
    if(messageTextArea.value ===""){
        alert("Informe a sua situação na caixa de mensagem.")
        return;
    }

    form.submit();
});

//função que valida e-mail
function isEmailValid(email) {
    //criar uma regex p validar
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)) {
        return true
    }
    return false;
}

/*function validaPassword() {
    pattern = Pattern.compile("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$");
    matcher = pattern.matcher(valor);
    if (valor.length() < 8 || valor.length() > 32) {
        al("Senha deve conter de 8 a 32 caracteres");
    } else {
        if (matcher.find()) {
            System.out.println("senha valida");
        } else {
            System.out.println("senha invalida, verifique se ha espacos ou caracteres improprios");
        }
    }
}*/
//FUNÇÃO PARA VALIDAR SENHA
function validaPassword(passwordInput, length){
    if(passwordInput.length >= 8){
        return true;
    }
    return false;
}