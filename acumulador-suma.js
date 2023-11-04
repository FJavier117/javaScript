//Suma acumulativa
let sumaAcumulativa1 = 0;
let valMax = 5;
for(let i= 1; i <= 5; i++){
    console.log(`${sumaAcumulativa1} + ${i}`);
    sumaAcumulativa1+=i;
    console.log(sumaAcumulativa1);
}
console.log(sumaAcumulativa1);

let sumaAcumulativa2 = 0;
let contador = 1;
while(contador <= valMax){
    console.log(`${sumaAcumulativa2} + ${contador}`);
    sumaAcumulativa2+=contador;
    console.log(sumaAcumulativa2);
    contador++;
}


let sumaAcumulativa3 = 0;
let contador2 = 1;
do{
    console.log(`${sumaAcumulativa3} + ${contador2}`);
    sumaAcumulativa3+=contador2;
    console.log(sumaAcumulativa3);
    contador2++;
}while(contador2 <= valMax);
   