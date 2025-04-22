//inicio
function numeroPar(Messi) {                             //se crea la funcion numeroPar (el nombre Messi es solo un ejemplo)
    return Messi % 2 === 0 ? "Es par" : "No es par";    //se verifica si el número es par o no en base al resto de 2
}
let numero = 7;                                         //se crea la variable al final del proceso (en este caso 7)
console.log(numeroPar(numero));                         //se imprime el resultado de la función (en este caso "No es par")