var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');
var temVencedor = '';

mudarJogador('X');

function escolherQuadrado(id){
    var quadrado = document.getElementById(id); 
    if (quadrado.innerHTML != '-' || vencedorSelecionado.innerHTML != ''){
        return
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = 'black';

    if(jogador == "X"){
        jogador = "O"
    } else {
        jogador = "X"
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    if (quadrados[0].innerHTML != '-' && quadrados[1].innerHTML != '-' && quadrados[2].innerHTML != '-'){
        if ((quadrados[0].innerHTML == quadrados[1].innerHTML) && (quadrados[1].innerHTML == quadrados[2].innerHTML)){
            temVencedor = true;
            mudaCor(quadrados[0], quadrados[1], quadrados[2]);
            mudaVencedor(quadrados[0].innerHTML)
            return
        }
    }
    if (quadrados[3].innerHTML != '-' && quadrados[4].innerHTML != '-' && quadrados[5].innerHTML != '-'){
        if ((quadrados[3].innerHTML == quadrados[4].innerHTML) && (quadrados[4].innerHTML == quadrados[5].innerHTML)){
            temVencedor = true;
            mudaCor(quadrados[3], quadrados[4], quadrados[5]);
            mudaVencedor(quadrados[3].innerHTML)
            return
        }
    }
    if (quadrados[6].innerHTML != '-' && quadrados[7].innerHTML != '-' && quadrados[8].innerHTML != '-'){
        if ((quadrados[6].innerHTML == quadrados[7].innerHTML) && (quadrados[7].innerHTML == quadrados[8].innerHTML)){
            temVencedor = true;
            mudaCor(quadrados[6], quadrados[7], quadrados[8]);
            mudaVencedor(quadrados[6].innerHTML)
            return
        }
    }

    if (quadrados[0].innerHTML != '-' && quadrados[3].innerHTML != '-' && quadrados[6].innerHTML != '-'){
        if ((quadrados[0].innerHTML == quadrados[3].innerHTML) && (quadrados[3].innerHTML == quadrados[6].innerHTML)){
            temVencedor = true;
            mudaCor(quadrados[0], quadrados[3], quadrados[6]);
            mudaVencedor(quadrados[0].innerHTML)
            return
        }
    }

    if (quadrados[1].innerHTML != '-' && quadrados[4].innerHTML != '-' && quadrados[7].innerHTML != '-'){
        if ((quadrados[1].innerHTML == quadrados[4].innerHTML) && (quadrados[4].innerHTML == quadrados[7].innerHTML)){
            temVencedor = true;
            mudaCor(quadrados[1], quadrados[4], quadrados[7]);
            mudaVencedor(quadrados[1].innerHTML)
            return
        }
    }

    if (quadrados[2].innerHTML != '-' && quadrados[5].innerHTML != '-' && quadrados[8].innerHTML != '-'){
        if ((quadrados[2].innerHTML == quadrados[5].innerHTML) && (quadrados[5].innerHTML == quadrados[8].innerHTML)){
            temVencedor = true;
            mudaCor(quadrados[2], quadrados[5], quadrados[8]);
            mudaVencedor(quadrados[2].innerHTML)
            return
        }
    }

    if (quadrados[0].innerHTML != '-' && quadrados[4].innerHTML != '-' && quadrados[8].innerHTML != '-'){
        if ((quadrados[0].innerHTML == quadrados[4].innerHTML) && (quadrados[4].innerHTML == quadrados[8].innerHTML)){
            temVencedor = true;
            mudaCor(quadrados[0], quadrados[4], quadrados[8]);
            mudaVencedor(quadrados[0].innerHTML)
            return
        }
    }

    if (quadrados[2].innerHTML != '-' && quadrados[4].innerHTML != '-' && quadrados[6].innerHTML != '-'){
        if ((quadrados[2].innerHTML == quadrados[4].innerHTML) && (quadrados[4].innerHTML == quadrados[6].innerHTML)){
            temVencedor = true;
            mudaCor(quadrados[2], quadrados[4], quadrados[6]);
            mudaVencedor(quadrados[2].innerHTML)
            return
        }
    }

   var listaQuadrados = Array.from(quadrados);
   var checkEmpate = listaQuadrados.every(function(element){
       if(element.innerHTML != '-'){
           return true
       }
       else 
           return false;
   })

   if(checkEmpate){
        vencedorSelecionado.innerHTML = 'EMPATE'
   }
}



function mudaCor(quadrado1, quadrado2, quadrado3){
    quadrado1.style.backgroundColor = '#0f0';
    quadrado2.style.backgroundColor = '#0f0';
    quadrado3.style.backgroundColor = '#0f0';
};

function mudaVencedor(quadrado){
    vencedorSelecionado.innerHTML = quadrado;
}

function reiniciar(){
    mudarJogador('X');
    vencedorSelecionado.innerHTML = '';
    
    for (var i=0; i<quadrados.length; i++){
        quadrados[i].innerHTML = '-';
        quadrados[i].style.color = '#eee';
        quadrados[i].style.backgroundColor = '#eee';
    }
}