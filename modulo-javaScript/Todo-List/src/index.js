import './index.css';

var aLista = []

const novoItem = document.getElementById('insere-lista')
novoItem.addEventListener('keyup', function (event) {
    var tecla = event.which || event.keyCode
    if(tecla === 13){
        var stringDigitada = document.getElementById('insere-lista').value
        if(!verificaString(stringDigitada)){
            aLista.push(novoItem.value);
            let lista = document.querySelector('.list')
            lista.innerHTML = lista.innerHTML + `<li class="item"> <input type="checkbox" id="${novoItem.value}"> <label for="${novoItem.value}">${novoItem.value}</label> </li>`
            let ContItens = document.getElementById("list-size").innerHTML = aLista.length+1 +" itens";
        }else{

            shakeIt(stringDigitada)
        }

    }
})

function verificaString(stringDigitada) {
    let key = false;
    return aLista.indexOf(stringDigitada) !== -1;
}

function shakeIt(stringDigitada) {

    let linhaQueVibra = document.getElementById(aLista.indexOf(stringDigitada));

    this.linhaQueVibra.classList.add('shake')


    setTimeout(function() {
        linhaQueVibra.classList.remove('shake');
    }, 300);
}
