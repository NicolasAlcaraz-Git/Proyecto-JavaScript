//definicion de variables
let palabra = "RADAR";
let contador = {};

//proceso
for (let letra of palabra) {                          //para recorre la palabra letra a letra
  if (contador[letra]) {                              //comprueba si la letra ya existe en el objeto "contador"
    contador[letra]++;                                //si existe, suma 1 a su contador
  } else {
    contador[letra] = 1;                              //si no existe, inicializa su contador en 1
  }
}

for (let letra in contador) {                         //recorre el objeto "contador" para mostrar el resultado
  console.log(letra + " = " + contador[letra]);        
}