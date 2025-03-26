const form = document.getElementById ('form-contato');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const nomeRemetente = document.getElementById('nome-Remetente');
    const emailRemetente = document.getElementById('email-remetente');
    const numeroRemetente = document.getElementById('numero-remetente');
    const mensagemRemetente = document.getElementById('mensagem-remetente');

    const mensagemSucesso = `Mensagem de: ${nomeRemetente.value} numero ${numeroRemetente.value} e email ${emailRemetente.value} enviado com sucesso`;
    
    formEValido = validaNome(nomeRemetente.value);
    if(formEValido){
        alert(mensagemSucesso);

        nomeRemetente.value = '';
        numeroRemetente.value = '';
        emailRemetente.value = '';
        mensagemRemetente.value= '';
    } else{
        alert("nome nao esta completo");
    }
}
)
console.log(form);
