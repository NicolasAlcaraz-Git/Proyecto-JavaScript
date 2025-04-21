//definicion de variables
let numeros = [1, 2, 3, 4, 5, 6, 7];
let suma = 0;                                              //se inicializa la variable suma en 0

for (let i = 0; i < numeros.length; i++) {                 //recorre el array "numeros" desde la primera hasta la ultima posicion
    if (numeros[i] % 2 === 0) {                            //comprueba si el numero seleccionado es par
        suma += numeros[i];                                //suma el numero par a la variable "suma"
    }
}

console.log("La suma de los números pares es: " + suma);