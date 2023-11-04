//Ciclo while
//Ejemplo imprimir conteo de valore del 0 al 10

let contador = 0;
while (contador!= 10) {
    console.log(contador);
    contador++;
}

//Do while
let contador2 = 0;
do{
    console.log(contador2);
    contador2++;
}while(contador2!=10);

//imprimir del 0 al 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//imprimi valores en intervalos de 3 positivos tope +10
//imprimir en intervalos de 3 negativos tope -10
let limsup = 10;
let liminf = -10;

for (let i = 1; i <= limsup; i+=3) {
    console.log(i);
}

for (let i = 1; i >= liminf; i-=3) {
    console.log(i);
}