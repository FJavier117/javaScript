//Matriz arreglo de dos dimensiones
let miMatriz = [[100,200,300],[400,500,600]];

//Filas
let filas = miMatriz.length;
console.log(filas);
//Columnas
let columnas = miMatriz[0].length
console.log(columnas);

for(let i = 0; i < filas; i++){
    for(let j = 0; j < columnas; j++){
        console.log(`Elemento [${i}, ${j}] ->  ${miMatriz[i][j]}`);
    }
}


