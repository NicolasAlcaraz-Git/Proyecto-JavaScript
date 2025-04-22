//inicio
function mayorYmenor (x, y, z) {                    //se crea la funcion mayorYmenor
    const mayor = Math.max(x, y, z);                //se crea la constante mayor y se le asigna el valor maximo de los tres numeros
    const menor = Math.min(x, y, z);                //se crea la constante menor y se le asigna el valor minimo de los tres numeros
    return {mayor, menor};                          //se retorna una variable a las constantes mayor y menor
}
let resultado = mayorYmenor(1, 4, 7);               //se crea la variable resultado y le asigna valores a la funcion mayorYmenor
console.log("El mayor es: " + resultado.mayor);     //se imprime el resultado (en este caso 7)
console.log("El menor es: " + resultado.menor);     //se imprime el resultado (en este caso 1)