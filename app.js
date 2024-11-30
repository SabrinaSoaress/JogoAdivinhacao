let chute;
let tentativas = 1;
let numeroMaximo = 100;

alert(`Bem vindo ao Jogo do Número secreto!!`);

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

while (chute != numeroSecreto) {
chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute < numeroSecreto) {
        alert(`O número ${chute} é MENOR do que o número Secreto!`);
        } else {
        alert(`O número ${chute} é MAIOR do que o número Secreto!`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Parabéns! Você conseguiu acertar o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} !`);
