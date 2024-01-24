// Variables

let numeroMaximoPosible=1000;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario=0;
let intentos=1;
let palabra="intento"
let maximosIntentos=3;
console.log(numeroSecreto);
while(numeroUsuario != numeroSecreto){

    numeroUsuario= parseInt(prompt(`Me indicas un numero del 1 al ${numeroMaximoPosible} por favor:`));
    console.log(typeof(numeroUsuario));
   
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero es ${numeroUsuario}`);
        alert(`Tu acertastes despues de ${intentos}  ${intentos == 1 ? 'intento':'intentos' }`);
      
    }else  {
        if(numeroUsuario > numeroSecreto){
        alert('el numero secreto es menor');
        }
        else{ 
            alert('El numero secreto es mayor');
        }
        intentos ++ ;
        //palabra = "intentos";
        if(intentos> maximosIntentos){
            alert(`llegaste al limite de ${maximosIntentos} intentos`);
            break;
        }
    }
    
}


/*
let contador = 0;

while(contador < 11){
    console.log(`iteracacion ${contador}`);
    contador++;
}

let contadorD = 10;

while(contadorD >= 0){
    console.log(`iteracacion1 ${contadorD}`);
    contadorD--;
}

let contadorUsuario = prompt("Ingrese un numero para iniciar la cuenta regresiva");
let contadorCero=0;

while(contadorUsuario >= contadorCero){
    console.log(`Inicia en ${contadorCero}`);
    contadorCero++;
}
*/
