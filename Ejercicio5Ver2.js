//inicio
function repetirPalabra(palabra, n) {           //se define la funcion repetirPalabra con los parametros palabra y n
    let resultado = "";                         //se define la variable resultado como una cadena vacia
    for (let i = 0; i < n; i++) {               //for (para) repite i desde 0 mientras sea menor que n
        resultado += palabra + "\n";            //se le suma a resultado la palabra y un salto de linea
    }
    return resultado;                           //se retorna el resultado
}

let n = 7;                                      //se asigna el valor 7 a la variable n
let palabra = "Dragón";                         //se asigna la palabra "Dragón" a la variable palabra
let resultado = repetirPalabra(palabra, n);     //se le asigna a resultado el valor de la funcion repetirPalabra con los parametros palabra y n   
console.log(resultado);