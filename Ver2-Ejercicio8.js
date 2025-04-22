//inicio
function multiplos() {                                  //se define la funcion multiplos
    let i = 1;                                          //se le asigna a i el valor 1
    console.log("Múltiplos de 2 y 3 menores a 100:");   //muestra el mensaje "Múltiplos de 2 y 3 menores a 100:"
    while (i < 100) {                                   //mientras i sea menor que 100 entonces ...
        if (i % 2 === 0 && i % 3 === 0) {               //si i es divisible por 2 y i es divisible por 3 entonces ...
            console.log(i);                             //muestra el valor de i
        }
        i++;
    }
}
multiplos();
