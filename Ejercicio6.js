// definición de variables
let num1 = 9                                            // se asigna el valor 1 a la variable num1         
let num2 = 1                                            // se asigna el valor 9 a la variable num2

//proceso
if (num1 < num2) {                                      // si num1 es menor que num2 entonces ...
    for (let i = num1 + 1; i < num2; i++) {             // for (para) repite i desde num1 + 1 mientras sea menor que num2
        console.log(i);                                 //muestra el valor de i
    }
} else if (num1 > num2) {                               // sino si num1 es mayor que num2 entonces ...
    for (let i = num1 - 1; i > num2; i--) {             // for (para) repite i desde num1 - 1 mientras sea mayor que num2
        console.log(i);                                 //muestra el valor de i
    }
}