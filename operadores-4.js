/*
    Operadores de comparación
    == comparador si dos valores son iguales por ejemplos x == y
    === operador de igualdad exacto x === y compara el valor y el tipo de dato
    != distinto x!=y
    !== distinto exacto verifica el valor y el tipo x!==y
    > mayor
    >= mayor o igual
    < menor
    <= menor o igual
*/

let a = 5; 
let b = '5';
console.log(a);
console.log(b);

//Operador de igualdad compara valores y realiza comversión de tipos de ser necesario
console.log("a == b ->", a == b);
//Operador de igualdad estricta o exacto compara valores y tipo de dato
console.log("a === b ->", a === b);
//String interpolation
console.log(`${a} === ${b} -> ${a === b}`)

//Operadores distintos
console.log(`${a} != ${b} -> ${a != b}`);
//Operadores distintos exacto
console.log(`${a} !== ${b} -> ${a !== b}`);
//Operadore menor que
console.log(`${a} < ${b} -> ${a < b}`);
//Operadore menor o igual que
console.log(`${a} <= ${b} -> ${a <= b}`);
//Operadore mayor que
console.log(`${a} > ${b} -> ${a > b}`);
//Operadore mayor o igual que
console.log(`${a} >= ${b} -> ${a >= b}`);