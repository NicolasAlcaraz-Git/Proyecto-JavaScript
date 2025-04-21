//inicio
function obtener(minimo, maximo, divisor) {                   //se define la función con sus parametros
    let divisibles = [];                                      //se crea un array vacio para almacenar los numeros obtenidos
  
    for (let i = minimo; i <= maximo; i++) {                  //recorre el array desde el valor minimo hasta el maximo
      if (i % divisor === 0) {                                      //comprueba si el numero es divisible por el divisor
        divisibles.push(i);                                   //si el numero es divisible lo agrega al array "divisibles"
      }
    }
  
    return divisibles;                                        //devuelve el array "divisibles" con los numeros obtenidos
  }
  
  let resultado = obtener(5, 25, 3);                          //se determinan los valores que se desean obtener
  
  //salida
  console.log("Números divisibles:" + resultado);