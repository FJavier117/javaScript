    'use strict'  // esto evita utilizar Hoisting bajo un entorno normal sin utilizar extensiones como las de VSC
    
    /*
    El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos 
    de ejecución en JavaScript (específicamente las fases de creación y ejecución). Sin embargo, el concepto 
    puede ser un poco confuso al principio.

    Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables 
    y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. 
    Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de 
    compilación, pero quedan exactamente en dónde las has escrito en el código.

    En otras palabras primero podemos usar una variable y despues declararla

    */


//Ejemplo tradicional
let x = 20;
console.log(x)

let y;
y = 20;
console.log(y);

//Hoisting solo funciona con var
//Ejercicio propuesto intenta utilizar Hoisting con let
x1 = 20;  //Inicializo una variable no declarada
console.log(x); //Utilizo la variable no declarada
var x1; // Declaro la variable ya utilizada






