//definicion de variables
let personas = [
    { nombre: "Goku", sexo: "Masculino", edad: 47 },
    { nombre: "Bulma", sexo: "Femenino", edad: 51 },
    { nombre: "Vegeta", sexo: "Masculino", edad: 52 },
    { nombre: "Pan", sexo: "Femenino", edad: 4 }
  ];

  //proceso
  //funcion para calcular el promedio de edad
  function calcularPromedioEdad(personas) {
    let sumaEdades = 0;
    for (let i = 0; i < personas.length; i++) {                       //recorre el array de personas en base a la cantidad de elementos dentro
      sumaEdades += personas[i].edad;                                 //recoge la informacion de "edad" de cada persona y la suma a la variable sumaEdades
    }
    return sumaEdades / personas.length;                              //calcula el promedio de edad dividiendo la suma de todas las edades entre la cantidad de personas
  }                                                                   //return llama a la funcion y devuelve el resultado de la operacion
  
  //funcion para calcular la mujer de mayor edad
  function encontrarMujerMayor(personas) {
    let mujerMayor = null;                                            //se inicializa con un valor de nombre indefinido
    for (let i = 0; i < personas.length; i++) {                       //recorre el array de personas en base a la cantidad de elementos dentro
      if (personas[i].sexo === "Femenino") {                          //si la persona es "Femenino" entonces ...
        if (!mujerMayor || personas[i].edad > mujerMayor.edad) {      //si la mujer mayor no existe o la edad de la mujer es mayor que la edad de la mujer con mayor edad entonces ...
          mujerMayor = personas[i];                                   //la mujer con mayor edad se convierte en la mujer actual
        }
      }
    }
    return mujerMayor;                                                //return llama a la funcion y devuelve el resultado de la operacion
  }
  
  //funcion para calcular el hombre de menor edad
  function encontrarHombreMenor(personas) {
    let hombreMenor = null;                                           //se inicializa con un valor de nombre indefinido
    for (let i = 0; i < personas.length; i++) {                       //recorre el array de personas en base a la cantidad de elementos dentro
      if (personas[i].sexo === "Masculino") {                         //si la persona es "Masculino" entonces ...
        if (!hombreMenor || personas[i].edad < hombreMenor.edad) {    //si el hombre menor no existe o la edad del hombre es menor que la edad del hombre con menor edad entonces ...
          hombreMenor = personas[i];                                  //el hombre con menor edad se convierte en el hombre actual
        }
      }
    }
    return hombreMenor;                                               //return llama a la funcion y devuelve el resultado de la operacion
  }
  
  //funcion para calcular el promedio de edad de las mujeres
  function calcularPromedioEdadMujeres(personas) {
    let sumaEdades = 0;
    let cantidadMujeres = 0;
    for (let i = 0; i < personas.length; i++) {                       //recorre el array de personas en base a la cantidad de elementos dentro
      if (personas[i].sexo === "Femenino") {                          //si la persona es "Femenino" entonces ...
        sumaEdades += personas[i].edad;                               //recoge la informacion de "edad" de cada mujer y la suma a la variable sumaEdades
        cantidadMujeres++;                                            //incrementa la cantidad de mujeres de 1 en 1
      }
    }
    return sumaEdades / cantidadMujeres;                              //return llama a la funcion y devuelve el resultado de la operacion
  }
  
  //salida
  let promedioEdad = calcularPromedioEdad(personas);
  console.log("Promedio de edad: " + promedioEdad);
  
  let mujerMayor = encontrarMujerMayor(personas);
  console.log("Mujer con mayor edad: " + mujerMayor.nombre);
  
  let hombreMenor = encontrarHombreMenor(personas);
  console.log("Hombre con menor edad: " + hombreMenor.nombre);
  
  let promedioEdadMujeres = calcularPromedioEdadMujeres(personas);
  console.log("Promedio de edad de las mujeres: " + promedioEdadMujeres);