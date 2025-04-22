//definicion de variables
let personas = [
    { nombre: "Goku", sexo: "Masculino", edad: 47 },
    { nombre: "Bulma", sexo: "Femenino", edad: 51 },
    { nombre: "Vegeta", sexo: "Masculino", edad: 52 },
    { nombre: "Pan", sexo: "Femenino", edad: 4 }
  ];
  
  let promedioEdad = 0;                                                            //se inicializa en 0 para calcular el promedio de edad 
  let promedioEdadMujeres = 0;                                                     //se inicializa en 0 para calcular el promedio de edad de las mujeres
  let sumaEdades = 0;                                                              //se inicializa en 0 para sumar las edades
  let sumaEdadesMujeres = 0;                                                       //se inicializa en 0 para sumar las edades de las mujeres
  let mujerMayorEdad = { nombre: "", edad: 0 };                                    //se inicializa con un valor muy bajo
  let hombreMenorEdad = { nombre: "", edad: 999999999 };                           //se inicializa con un valor muy alto
  let cantidadMujeres = 0;                                                         //se inicializa en 0 para contar la cantidad de mujeres
                                                                                   
//proceso
  for (let i = 0; i < personas.length; i++) {                                      //recorre el array de personas en base a la cantidad de elementos dentro
    let persona = personas[i];                                                     //obtiene cada persona del array una por una
    sumaEdades += persona.edad;                                                    //recoge la informacion de "edad" de cada persona y la suma a la variable sumaEdades
  
    
    if (persona.sexo === "Femenino") {                                             //si la persona es "Femenino" entonces ...
      sumaEdadesMujeres += persona.edad;                                           //recoge la informacion de "edad" de cada mujer y la suma a la variable sumaEdadesMujeres
        cantidadMujeres++;                                                         //incrementa la cantidad de mujeres de 1 en 1                                               
      if (persona.edad > mujerMayorEdad.edad) {                                    //si la edad de la mujer es mayor que la edad de la mujer con mayor edad entonces ...
        mujerMayorEdad = persona;                                                  //la mujer con mayor edad se convierte en la mujer actual
      }
    }
  
    if (persona.sexo === "Masculino" && persona.edad < hombreMenorEdad.edad) {     //si la persona es "Masculino" y su edad es menor que la edad del hombre con menor edad entonces ...
      hombreMenorEdad = persona;                                                   //el hombre con menor edad se convierte en el hombre actual
    }
  }
  
  promedioEdad = (sumaEdades / personas.length);                                   //calcula el promedio de edad dividiendo la suma de todas las edades entre la cantidad de personas
  console.log("Promedio de edad: " + promedioEdad);
  
  promedioEdadMujeres = sumaEdadesMujeres / cantidadMujeres;                       //calcula el promedio de edad de las mujeres dividiendo la suma de sus edades entre la cantidad
  
  //salida
  console.log("Promedio de edad de las mujeres: " + promedioEdadMujeres);
  console.log("Mujer con mayor edad: " + mujerMayorEdad.nombre);
  console.log("Hombre con menor edad: " + hombreMenorEdad.nombre);