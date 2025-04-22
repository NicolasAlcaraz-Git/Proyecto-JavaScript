//inicio
function mostrarMultiplos(x, y) {              //se define la funcion mostrarMultiplos con los parametros x y y
    let inicio = Math.min(x, y) + 1;           //se le asigna a inicio el menor de los dos numeros mas 1
    const fin = Math.max(x, y);                //se le asigna a fin el mayor de los dos numeros
    const multiplos = [];                      //se define la variable multiplos como un arreglo vacio
    while (inicio % 3 !== 0) {                 //mientras inicio no sea divisible por 3 entonces ...
        inicio++;                              //se le suma 1 a inicio
    }
    for (let i = inicio; i < fin; i += 3) {    //for (para) repite i desde inicio mientras sea menor que fin, incrementando de 3 en 3
        multiplos.push(i);                     //se le agrega a multiplos el valor de i
    }
    return multiplos;                          //se retorna el arreglo multiplos
}

let resultado = mostrarMultiplos(3, 27);       //se le asigna a resultado el valor de la funcion mostrarMultiplos con las variables 3 y 27
console.log(resultado);
