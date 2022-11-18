//iniciar variables
let tarjetasDestapadas = 0;
let tarjetaUno = null;
let tarjetaDos = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
//documento html
let mostrarMovimientos = document.getElementById("movimientos");
// numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random() - 0.5});
console.log(numeros);

//funcion principal
function Mostrar(id){
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
    }
}