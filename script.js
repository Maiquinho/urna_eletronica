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

function comecarEtapa(){
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';

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
    alert('finalizou de digitar o voto');
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
    alert('Clicou em BRANCO!')
}

function corrige(){
    alert('Clicou em CORRIGE!')
}


function confirma(){
    alert('Clicou em CONFIRMA!')
}

comecarEtapa();