/* let arreglo = ["Monitor", "Ventilador"];

console.log(arreglo.length) // 2

arreglo.push("Cámara Web")
arreglo.push("Control de videojuegos")

console.log(arreglo)

console.log(arreglo.length) //4

arreglo.pop()

console.log(arreglo)

console.log(arreglo.length) //3

arreglo.unshift(5)

console.log(arreglo)

console.log(arreglo.length) //4

let ucamper1 = "Raisa"
let ucamper2 = "Luis"
let ucamper3 = "Inti"
let ucamper4 = "Juan"

arreglo.push(ucamper1)
arreglo.push(ucamper2)
arreglo.push(ucamper3)
arreglo.push(ucamper4)

console.log(`Kevin elige como premio: ${arreglo[1]}`)

console.log(arreglo)

console.log(arreglo.length) //4

console.log(`Términos y condiciones: ¿Kevin es un usuario activo para recibir su premio? : ${arreglo[4]}`)

arreglo.copyWithin */


const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 2, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
