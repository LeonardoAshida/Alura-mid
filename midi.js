function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(contador = 0; contador < listaDeTeclas.length; contador++){ //para

const tecla = listaDeTeclas[contador];
const instrumento = tecla.classList[1];
const idAudio = `#som_${instrumento}`; //template String

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){  //Função de quando a tecla é pressionada
        if(evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
     
    }

    tecla.onkeyup = function(){ //Função de quando a tecla é "solta"
       tecla.classList.remove('ativa');  
    }

}
