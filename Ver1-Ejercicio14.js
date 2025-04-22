//definicion de variables
let numeros = [1, 2, 3, 4, 5, 6, 7];
let pares = [];

//proceso
for (let i = 0; i < numeros.length; i++) {            //recorre el array "numeros" desde la primera hasta la ultima posicion
  if (numeros[i] % 2 === 0) {                         //comprueba si el numero seleccionado es par
    pares.push(numeros[i]);                           //si el numero es par lo agrega al array "pares"
  }
}

//salida
console.log("Los números pares son:", pares);