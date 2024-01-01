alert('testando')

//Introdução ao jogo e variaveis globais
var nomeJogador = prompt('***Seja bem vindo ao jogo de advinhação*** \n\n Qual seu nome?');
var tutorialYesNo = confirm(`${nomeJogador}, para ver o tutorial clique em OK, caso contrário, clique em cancelar`);
var level = 1
var numeroTentativas = 5
var pontos = 80

var resposta1;
var resposta2;
var resposta3;
var resposta4;
var resposta5;


var minLV1 = 1;
var maxLV1 = 5;
var numeroSecretoLV1 = Math.floor(Math.random() * (maxLV1 - minLV1 + 1)) + minLV1;

var minLV2 = 11;
var maxLV2 = 18;
var numeroSecretoLV2 = Math.floor(Math.random() * (maxLV2 - minLV2 + 1)) + minLV2;

var minLV3 = 101;
var maxLV3 = 120;
var numeroSecretoLV3 = Math.floor(Math.random() * (maxLV3 - minLV3 + 1)) + minLV3;

var minLV4 = 1001;
var maxLV4 = 1021;
var numeroSecretoLV4 = Math.floor(Math.random() * (maxLV4 - minLV4 + 1)) + minLV4;

var minLV5 = 10001;
var maxLV5 = 10050;
var numeroSecretoLV5 = Math.floor(Math.random() * (maxLV5 - minLV5 + 1)) + minLV5;




if (tutorialYesNo == true) {
    alert('*****REGRAS DO JOGO***** \n\n -Voce tem cinco tentativas para descobrir o numero secreto. \n\n -Cada acerto você sobe de level, quanto maior o level maior a dificuldade. \n\n -A cada acerto você ganha pontos que variam de acordo com o level atual. \n\n -A cada 100 pontos adquiridos você ganha um tentativa extra.');
};
alert(`${nomeJogador}, Você ganhou 80 pontos de bonus para ajudar na sua jornada inicial.`);


//---------Level 1------------------------------
function iniciarLevel1 () {
    while (numeroTentativas > 0) {
     resposta1 = Number(prompt(`***LEVEL ATUAL: ${level} \n\n ***TENTATIVAS RESTANTES: ${numeroTentativas} \n\n ***TOTAL PONTOS: ${pontos} \n\n vamos lá ${nomeJogador} digite um numero de ${minLV1} a ${maxLV1}`));
    if (resposta1 === numeroSecretoLV1) {
        alert(`Parabéns ${nomeJogador} você acertou, bonus que você ganhou nessa fase: \n\n + 100 pontos \n\n + uma tentativa extra \n\n Agora vamos para o level 2 OK?`);
        pontos = pontos + 100;
        numeroTentativas++;
        level++;
        break
    } 
    else {
        alert(`Você errou ${nomeJogador}, mais não desanime!!!`)
        numeroTentativas--
    }
    }
}    



//---------Level 2------------------------------
function iniciarLevel2 () {
    while (numeroTentativas > 0) {
     resposta2 = Number(prompt(`***LEVEL ATUAL: ${level} \n\n ***TENTATIVAS RESTANTES: ${numeroTentativas} \n\n ***TOTAL PONTOS: ${pontos} \n\n vamos lá ${nomeJogador} digite um numero de ${minLV2} a ${maxLV2}`));
    if (resposta2 === numeroSecretoLV2) {
        alert(`Parabéns ${nomeJogador} você acertou, bonus que você ganhou nessa fase: \n\n + 120 pontos \n\n + uma tentativa extra \n\n Agora vamos para o level 3 OK?`);
        pontos = pontos + 120;
        numeroTentativas++;
        level++;
        break
    } 
    else {
        alert(`Você errou ${nomeJogador}, mais não desanime!!!`)
        numeroTentativas--
    }
    }
}    



//---------Level 3------------------------------
function iniciarLevel3 () {
    while (numeroTentativas > 0) {
     resposta3 = Number(prompt(`***LEVEL ATUAL: ${level} \n\n ***TENTATIVAS RESTANTES: ${numeroTentativas} \n\n ***TOTAL PONTOS: ${pontos} \n\n vamos lá ${nomeJogador} digite um numero de ${minLV3} a ${maxLV3}`));
    if (resposta3 === numeroSecretoLV3) {
        alert(`Parabéns ${nomeJogador} você acertou, bonus que você ganhou nessa fase: \n\n + 180 pontos \n\n + uma tentativa extra \n\n Agora vamos para o level 4 OK?`);
        pontos = pontos + 180;
        numeroTentativas++;
        level++;
        break
    } 
    else {
        alert(`Você errou ${nomeJogador}, mais não desanime!!!`)
        numeroTentativas--
    }
    }
}  



//---------Level 4------------------------------
function iniciarLevel4 () {
    while (numeroTentativas > 0) {
     resposta4 = Number(prompt(`***LEVEL ATUAL: ${level} \n\n ***TENTATIVAS RESTANTES: ${numeroTentativas} \n\n ***TOTAL PONTOS: ${pontos} \n\n vamos lá ${nomeJogador} digite um numero de ${minLV4} a ${maxLV4}`));
    if (resposta4 === numeroSecretoLV4) {
        alert(`Parabéns ${nomeJogador} você acertou, bonus que você ganhou nessa fase: \n\n + 275 pontos \n\n + duas tentativas extra \n\n Agora vamos para o level 5, esse é o ultimo level OK?`);
        pontos = pontos + 275;
        numeroTentativas = numeroTentativas + 2;
        level++;
        break
    } 
    else {
        alert(`Você errou ${nomeJogador}, mais não desanime!!!`)
        numeroTentativas--
    }
    }
}    



//---------Level 1------------------------------
function iniciarLevel5 () {
    while (numeroTentativas > 0) {
     resposta5 = Number(prompt(`***LEVEL ATUAL: ${level} \n\n ***TENTATIVAS RESTANTES: ${numeroTentativas} \n\n ***TOTAL PONTOS: ${pontos} \n\n vamos lá ${nomeJogador} digite um numero de ${minLV5} a ${maxLV5}`));
    if (resposta5 === numeroSecretoLV5) {
        alert(`Parabéns ${nomeJogador} você acertou, bonus que você ganhou nessa fase: \n\n + 500 pontos \n\n + PARABÉNS POR TER FINALIZADO O JOGO! \n\n clique em OK para ver sua pontuação final`);
        pontos = pontos + 100;
        alert(`NOSSA....${nomeJogador} esse resultado foi incrivel, olha o tanto de pontos que você fez \n\n TOTAL DE PONTOS: ${pontos}`)
        break
    } 
    else {
        alert(`Você errou ${nomeJogador}, mais não desanime!!!`);
        numeroTentativas--
    }
    }
}    

iniciarLevel1();
iniciarLevel2();
iniciarLevel3();
iniciarLevel4();
iniciarLevel5();

if (numeroTentativas === 0) {
    alert('Suas Tentativas acabaram :( \n\n GAME OVER!');
}

let iniciarNovoJogo = confirm('Dejesa iniciar um novo jogo?');

if (iniciarNovoJogo === true) {
    location.reload();
}

alert(`${nomeJogador} Obrigado por jogar, até a proxima`)
