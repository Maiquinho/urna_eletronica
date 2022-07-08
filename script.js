// Funções de controle de inferface 

let seuVotoPara = document.querySelector('.tela__divisao-1-voto span');
let cargo = document.querySelector('.tela__divisao-1-politico span');
let descricao = document.querySelector('.tela__divisao-1-informacoes');
let aviso = document.querySelector('.tela__divisao-2');
let lateral = document.querySelector('.tela__divisao-1-right');
let numeros = document.querySelector('.tela__divisao-1-caixa-numeros');


// Funções de controle de ambiente 

let etapaAtual = 0;
let numero = '';
let votoBranco = false;

function comecarEtapa(){
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';
    numero = '';

    for(let i=0;i < etapa.numeros; i++){
        if(i === 0){
            numeroHtml += '<div class="tela__divisao-1-numero pisca"></div>';
        }else{
            numeroHtml += '<div class="tela__divisao-1-numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral. innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if(item.numero === numero){
            return true;
        }else {
            return false;
        }
    });

    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome} <br/>Partido: ${candidato.partido}`;

        let fotosHtml = '';
        for(let i in candidato.fotos){
            fotosHtml += `<div class="tela__divisao-1-imagem"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
        }

        lateral.innerHTML = fotosHtml;
    }else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
    }
}

function clicou(n){
    let elNumero = document.querySelector('.tela__divisao-1-numero.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface();
        }
    }
}

function branco(){
    if(numero === ''){
        votoBranco = true;
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
        lateral.innerHTML = '';
    }else {
        alert('Para votar em BRANCO, não pode ter digitado nenhum número!');
    }
}

function corrige(){
    comecarEtapa();
}


function confirma(){
    let etapa = etapas[etapaAtual];

    let votoConfirmado = false;

    if(votoBranco === true){
        votoConfirmado = true;
        console.log('confirmando para branco');
    } else if(numero.length === etapa.numeros){
        votoConfirmado = true;
        console.log('confirmando como '+numero);
    }

    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        }else{
            descricao.innerHTML = '<div class="aviso--grande pisca">FIM</div>'
        }
    }
}

comecarEtapa();