/*
 ==
Igualdad: Devuelve true si ambos operandos son iguales.
3 == 3
3 == '3'
!=
Desigualdad: Devuelve true si ambos operandos no son iguales.
3 != 4
===
Estrictamente igual: Devuelve true si los operandos son iguales y del mismo tipo.
3 === 3
!==
Estrictamente desigual: Devuelve true si los operandos no diferentes y/o de diferente tipo.
3 !== '3'
>
Mayor que: Devuelve true si el operando de la izquierda es mayor que el de la derecha.
4 > 3
*/

let numberOne = 2;
let numberTwo = "2";

/* numberTwo = numberOne */

/* console.log(numberOne);
console.log(numberTwo); */

//Forcé a la variable numberOne a ser la variable numberTwo
/* if(numberOne = numberTwo){
    console.log(`Kevin forzó a la variable y esta vale: ${numberOne}`)
    console.log("Ambas variables son iguales")
} */

/* console.log("----------------------")

if(numberOne == numberTwo){
    console.log(`Kevin forzó a la variable y esta vale: ${numberOne}`)
    console.log("Ambas variables son iguales")
}else{
    console.log(numberOne)
    console.log(numberTwo)
    console.log("Ambas variables no valen lo mismo")
} */

console.log("----------------------")
/* 
if(numberOne === numberTwo){
    console.log("Ambas variables son iguales")
}else{
    console.log("Las variables son de valor diferente")
} */

/* Entradas al cine - menores o igual a 15 años 50% */

/* let Juan = 20;
let Leticia = 15;

if(Leticia <= 15){
    console.log("El usuario tiene un 50% de descuento")
}else{
    console.log("El usuario tiene que pagar entrada completa")
} */

/* function saludar () {
    console.log("Hola ucamper")
}

saludar();
 */

const suma = (a,b,c,d,e) => {
    console.log(a+b+c+d+e)
}
suma(5,5,5,5,5);