//iniciar variables
let tarjetasDestapadas = 0;
let tarjetaUno = null;
let tarjetaDos = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = 0;
let timer = 60;
let timerInicial = 60;
let tiempoRegresivoId = null;
//documento html
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById("tiempo");
// numeros aleatorios
let numeros = ["¿Que es la interacción-humano computador?","Estudia como la tecnologia evoluciona y hacerla mas comoda para el humano","¿Ramas de interacción-humano computador?","Seguridad, Usabilidad, Funcionalidad","¿La interacción-humano computador busca bajar el margen de error del PC?","Si, si lo busca","¿La interaccion-humano computador que busca aumentar y disminuir en los humanos?","Aumentar eficiencia y satisfacción, Disminuir estres y frustración","¿En que año surgio la interacción humano-computador?","1980","¿En que trabaja hoy en dia la interacción humano-computador?","Crear diseños centrados en el usuario","¿Que se espera a futuro con la interacción humano-computador?","Interfaces de usuario presentes en la vida cotidiana","¿Los SmarthPhone son interacción humano-computador?","Si, ya que cuentan con pantallas tactiles y reconocimiento facial y de voz"];
numeros = numeros.sort(()=>{return Math.random() - 0.5});

// funcione bloquear
function bloquearTarjetas(){
    for(let i=0; i<=15; i++){
        let tarjetasBloqueada = document.getElementById(i);
        tarjetasBloqueada.innerHTML = numeros[i];
        tarjetasBloqueada.disabled = true;
    }
}

//funcion tiempo
function contarTiempo(){
    tiempoRegresivoId = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();
        }
    },1000)
}

//funcion principal
function Mostrar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);
    if(tarjetasDestapadas == 1){
        // Mostrar primer parametro
        tarjetaUno = document.getElementById(id);
        primerResultado = numeros[id];
        tarjetaUno.innerHTML = primerResultado;
        // Deshabilitar boton
        tarjetaUno.disabled = true;
    }
    else if (tarjetasDestapadas == 2){
        // Mostrar segundo parametro
        tarjetaDos = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjetaDos.innerHTML = segundoResultado;
        tarjetaDos.disabled = true;
        // incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == "¿Que es la interacción-humano computador?" && segundoResultado == "Estudia como la tecnologia evoluciona y hacerla mas comoda para el humano"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }

        }else if(primerResultado == "¿Ramas de interacción-humano computador?" && segundoResultado == "Seguridad, Usabilidad, Funcionalidad"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        }else if(primerResultado == "¿La interacción-humano computador busca bajar el margen de error del PC?" && segundoResultado == "Si, si lo busca"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        }else if(primerResultado == "¿La interaccion-humano computador que busca aumentar y disminuir en los humanos?" && segundoResultado == "Aumentar eficiencia y satisfacción, Disminuir estres y frustración"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        }else if(primerResultado == "¿En que año surgio la interacción humano-computador?" && segundoResultado == "1980"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        }else if(primerResultado == "¿En que trabaja hoy en dia la interacción humano-computador?" && segundoResultado == "Crear diseños centrados en el usuario"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        }else if(primerResultado == "¿Que se espera a futuro con la interacción humano-computador?" && segundoResultado == "Interfaces de usuario presentes en la vida cotidiana"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        }
        else if(primerResultado == "¿Los SmarthPhone son interacción humano-computador?" && segundoResultado == "Si, ya que cuentan con pantallas tactiles y reconocimiento facial y de voz"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        }
        else{
            //Mostrar montenamente y volver a tapar
            setTimeout(()=>{
                tarjetaUno.innerHTML = " ";
                tarjetaDos.innerHTML = " ";
                tarjetaUno.disabled = false;
                tarjetaDos.disabled = false;
                tarjetasDestapadas = 0;
            },800);
        }

    }
}