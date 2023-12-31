var nomeJogador = prompt('SEJA BEM VINDO AO JOGO DE ADVINHAÇÃO, QUAL SEU NOME?');
var vertutorial = confirm(`${nomeJogador}, PARA VER O TUTORIAL CLIQUE EM OK, CASO CONTRÁRIO CLIQUE EM CANCELAR!`);
var numTentantivas = 3
var level = 1
var numeroSecretoLevel = Math.floor(Math.random() * 9) + 1;
var resposta1;
var minLV2 = 10;
var maxLV2 = 30;
var numeroSecretoLevel2 = Math.floor(Math.random() * (maxLV2 - minLV2 + 1)) + minLV2;
var resposta2;


//MOSTRAR O NUMERO SECRETO PARA TESTE
alert(`NUMERO SECRETO É: ${numeroSecretoLevel}`);


if (vertutorial == true ) {
    alert('O JOGO FUNCIONA DA SEGUINTE FORMA, VOCÊ TEM CINCO TENTATIVAS DE ADIVINHAR O NUMERO SECRETO, CADA VEZ QUE ACERTAR O NUMERO SECRETO VOCÊ SOBE DE NIVEL, SENDO CADA NIVEL MAIS DIFICIL QUE O ANTERIOR E JOGO TEM CINCO NIVEIS NO TOTALE CADA RESPOSTA CERTA VOCE GANHA 20 PONTOS E A CADA 100 PONTOS PODE GANHAR MAIS UMA TENTATIVA, PARA TE AJUDAR O JOGO JÁ TE DA 80 PONTOS DE INICIO')
    resposta1 = Number(prompt(`LEVEL ${level} \n DIGITE UM NUMERO DE 1 A 9`))
}   
else { resposta1 = Number(prompt(`LEVEL ${level} \n DIGITE UM NUMERO DE 1 A 9`))

}


if (resposta1 === numeroSecretoLevel) {
    level++
    alert(`Parabéns ${nomeJogador}, você acertou!!! \n Ganhou 20 pontos e agora vai para o level ${level}`);
    //MOSTRAR O NUMERO SECRETO level2 PARA TESTE
    alert(`o numero secreto level dois é: ${numeroSecretoLevel2}`)
    resposta2 = Number(prompt(`LEVEL ${level} \n DIGITE UM NUMERO DE 10 A 30`))
}



if (resposta2 === numeroSecretoLevel2) {
    level++
    alert(`Parabéns ${nomeJogador}, você acertou!!! \n Ganhou 20 pontos e agora vai para o level ${level}`);
}

