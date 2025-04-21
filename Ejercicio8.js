// definición de variables
let i = 1;                                           // se asigna el valor 1 a la variable i
console.log("Múltiplos de 2 y 3 menores a 100:");

// proceso
while (i < 100) {                                    // mientras i sea menor que 100 entonces ...
    if (i % 2 === 0 && i % 3 === 0) {                // si i es divisible por 2 y i es divisible por 3 entonces ...
        console.log(i);                              // muestra el valor de i
    }
    i++;                                             // incrementa i en 1
}