let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial () {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um númeor entre 1 e 10!');
}

exibirTextoInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTexto ('p', 'O número '+ chute + ' é MAIOR do que o número Secreto');
        } else {
            exibirTexto('p', 'O número '+ chute + ' é MENOR do que o número Secreto');
        }
        tentativas++;
        limparCampo();
    }
};

function gerarNumeroAleatorio() {
   return parseInt(Math.random( ) * 10 + 1);
}

function limparCampo() {
    chute =  document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);