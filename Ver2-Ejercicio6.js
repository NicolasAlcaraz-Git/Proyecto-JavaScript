//inicio
function elementosSeparadores(x, y) {           //se define la funcion elementosSeparadores con los parametros x y y
    let resultado = "";                         //se define la variable resultado como una cadena vacia
    for (let i = x + 1; i < y; i++) {           //for (para) repite i desde x+1 mientras sea menor que y
        resultado += i + "\n";                  //se le suma a resultado el valor de i y un salto de linea
    }
    return resultado;                           //se retorna el resultado
}

let x = 1;                                      //se asigna el valor 1 a la variable x
let y = 7;                                      //se asigna el valor 7 a la variable y
let resultado = elementosSeparadores(x, y);     //se le asigna a resultado el valor de la funcion elementosSeparadores con los parametros x y y
console.log(resultado);