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
let numeros = ["¿Que es HTML?","Es lenguaje de marcas de hipertexto y es el componente mas básico de los sitios web","¿Para que sirven las etiquetas?","Etiquetas sirven para mostrar contenido en el sitio y poscionarlo","¿Cuales son etiquetas HTML?","head, title, body, header, footer, canvas, article, p, div, section, form, img, video, nav","¿Partes de una etiqueta?","Etiqueta de apertura, Contenido, Etiqueta del cierre","¿Atributos de una etiqueta?","Nombre y Valor","¿Que son las clases?","Añaden mas información a estilos o librerias","¿Que significa HTML?","HyperText Markup Language","¿Que es css?","Una hoja de estilos para personalizar el sitio web"];
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

        if(primerResultado == "¿Que es HTML?" && segundoResultado == "Es lenguaje de marcas de hipertexto y es el componente mas básico de los sitios web"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }

        }else if(primerResultado == "¿Para que sirven las etiquetas?" && segundoResultado == "Etiquetas sirven para mostrar contenido en el sitio y poscionarlo"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        }else if(primerResultado == "¿Cuales son etiquetas HTML?" && segundoResultado == "head, title, body, header, footer, canvas, article, p, div, section, form, img, video, nav"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        }else if(primerResultado == "¿Partes de una etiqueta?" && segundoResultado == "Etiqueta de apertura, Contenido, Etiqueta del cierre"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        }else if(primerResultado == "¿Atributos de una etiqueta?" && segundoResultado == "Nombre y Valor"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        }else if(primerResultado == "¿Que son las clases?" && segundoResultado == "Añaden mas información a estilos o librerias"){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤑`;
                mostrarTiempo.innerHTML = `Fantastico 😎 tu tiempo es: ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        }else if(primerResultado == "¿Que significa HTML?" && segundoResultado == "HyperText Markup Language"){
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
        else if(primerResultado == "¿Que es css?" && segundoResultado == "Una hoja de estilos para personalizar el sitio web"){
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