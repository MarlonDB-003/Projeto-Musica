function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if(elemento === null){
        alert('Elemento não encontrado');
    }else{
        elemento.play();
    }
}

const listadeTecla = document.querySelectorAll('.tecla');

for(let cont=0; cont<listadeTecla.length; cont++){
    const tecla = listadeTecla[cont];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }else{

        }
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
