const endPoint = 'https://jsonplaceholder.typicode.com/todos/'
const nombrePokemon = 'blastoisew'
const pikachu = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`

/* fetch(endPoint)
  .then(panCrudo => panCrudo.json())
  .then(panListo => document.getElementById('datos').innerHTML=`${panListo[158].id}`)
  .catch(error => console.log(error))
  .finally(mensaje => console.log("No sé si funcionó")) */

  /* const consumiendoApi = async () => {
    try {
        console.log("Hola")
        const api = await fetch("https://jsonplaceholder.typicode.com/todos/5");
        const datos = await api.json();
        console.log(datos);
        console.log("Adiós")
    } catch (error) {
        console.log(error)
    }
}

consumiendoApi() */

const pokemon = async () => {
    try {
        const api = await fetch(pikachu)
        const data = await api.json()
        console.log(data.sprites.front_default)
        document.getElementById("datos").innerHTML=`
        <img src="${data.sprites.front_default}" alt="">
        `
    } catch (error) {
        console.log(error)
    }
}

pokemon()