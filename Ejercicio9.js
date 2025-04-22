//definición de variables
let numeros = [1, 2, 3, 4, 5, 6, 7];
let suma = 0;                                                      //se inicializa la variable suma en 0

//proceso
for (let i = 0; i < numeros.length; i++) {                         //recorre el array "numeros" desde la primera hasta la ultima posicion
    suma += numeros[i];                                            //suma el valor de la posicion i del array a la variable suma
}

console.log("El resultado a la suma de los elementos del array es: " + suma);