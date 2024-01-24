let numeroSecreto=0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else  {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }
        else{ 
            asignarTextoElemento('p','El número secerto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado =Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles:');
    }else{
       if(listaNumerosSorteados.includes(numeroGenerado)){
           listaNumerosSorteados.push(numeroGenerado);
           return generarNumeroSecreto();
       }else{
           return numeroGenerado;
       }
    }
}
function limpiarCaja(){
   let valorCaja= document.querySelector('#valorUsuario').value="";
   
}

function condicionesIniciales(){
    asignarTextoElemento("h1",'Juego del numero secreto');
    asignarTextoElemento("p",`Me indicas un numero del 1 al ${numeroMaximo} por favor:`);
    numeroSecreto=generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   
 } 


condicionesIniciales();



/*
let numeroUsuario=parseInt(prompt("Ingrese un numero:"));

function tablaDeMultiplicar(numeroDeUsuario){
 
    for( let i = 1; i<=10; i++){
        let result= numeroDeUsuario*i;
        console.log(`${numeroDeUsuario}*${i}=${result}`)
 }
}

tablaDeMultiplicar(numeroUsuario);
*/