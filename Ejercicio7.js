// definición de variables
let num1 = 3                                              // se asigna el valor 3 a la variable num1
let num2 = 27                                             // se asigna el valor 27 a la variable num2

// proceso
if (num1 < num2) {                                        // si num1 es menor que num2 entonces ...
    for (let i = num1 + 1; i < num2; i++) {               // for (para) repite i desde num1 + 1 mientras sea menor que num2
        if (i % 3 === 0) {                                // si i es divisible por 3 entonces ...
            console.log(i);                               // muestra el valor de i
        }
    }
} else if (num1 > num2) {                                 // sino si num1 es mayor que num2 entonces ...
    for (let i = num1 - 1; i > num2; i--) {               // for (para) repite i desde num1 - 1 mientras sea mayor que num2
        if (i % 3 === 0) {                                // si i es divisible por 3 entonces ...
            console.log(i);                               // muestra el valor de i
        }
    }
} else {
    console.log("Los números son iguales, no hay elementos entre ellos.");
}