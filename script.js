//Variables
let hora = document.getElementById('hora');
let minutos = 60;
let btn = document.getElementById('btn');
let resultado = document.getElementById('resultado');

//Creación del metodo que calculara la cantidad de segundos
function convertir(hora){
    let formula = hora.value * minutos * 60;
    resultado.innerHTML = formula + ' segundos. ';
    resultado.style.display = 'block';
    return resultado;
}