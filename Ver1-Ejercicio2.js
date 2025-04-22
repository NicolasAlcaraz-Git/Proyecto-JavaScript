//definicion de variables
let x = 1                                  //se asigna el valor 1 a la variable x
let y = 4                                  //se asigna el valor 4 a la variable y
let z = 7                                  //se asigna el valor 7 a la variable z

let mayor;
let menor;

//proceso
if (x >= y && x >= z) {                    //si x es mayor o igual que y y x es mayor o igual que z entonces ...
    mayor = x;                             //mayor toma el valor de x
} else if (y >= x && y >= z) {             //sino si y es mayor o igual que x y y es mayor o igual que z entonces ...
    mayor = y;                             //mayor toma el valor de y
} else {                                   //sino ...
    mayor = z;                             //mayor toma el valor de z
}
if (x <= y && x <= z) {                    //si x es menor o igual que y y x es menor o igual que z entonces ...
    menor = x;                             //menor toma el valor de x
} else if (y <= x && y <= z) {             //sino si y es menor o igual que x y y es menor o igual que z entonces ...
    menor = y;                             //menor toma el valor de y
} else {                                   //sino ...
    menor = z;                             //menor toma el valor de z
}

//salida
console.log("El mayor es: " + mayor);
console.log("El menor es: " + menor);