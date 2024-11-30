let nome = prompt('Qual é o seu nome?');
let idade = prompt('oii '+ nome +' Qual é a sua idade?');
let chute;
let tentativas = 1;


if (idade >= 18) {
    alert('aiii sim em, vamos jogar');

    alert('Bem vindo(a) '+ nome + ' ao jogo do número secreto');
    
    let numeroSecreto = 12;

    while (chute != numeroSecreto) {
        chute = prompt('Escolha um número entre 1 e 100');
        if (chute == numeroSecreto) {
            break;
        } else {
                if(chute < numeroSecreto) {
                    alert('o número Secreto é MAIOR que ' + chute);
                }else { 
                    alert('o número Secreto é MENOR que ' + chute);
                }
            }
            tentativas ++;
    }
    if(tentativas > 1){
        alert('Acertou!! o número era ' + numeroSecreto + ' você fez ' + tentativas + ' tentativas antes de acertar!');
    } else {
        alert(nome + ' você ARRASOU !! Conseguiu Acertar de PRIMEIRA!😎 O número era ' + numeroSecreto);
    }

} else {
    alert('não pode jogar');
}
