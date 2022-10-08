fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(panCrudo => panCrudo.json())
  .then(panListos => document.getElementById("nombreDeApi").innerHTML = panListo.title)
  .catch(err => (
    (console.log(err))
    (document.getElementById("nombreDeApi").innerHTML = 'Hola')

    ))

  /*console.log(json.title) */

/* Consumo de api para fotografía de mi card */
const apiFotos = 'https://jsonplaceholder.typicode.com/photos'

const leerApiFoto = async () => {
    try {
        const api = await fetch(apiFoto)
        const data = await api.json()
        console.log(data[129].url)
        /* const apiImage = 'https://via.placeholder.com/600/92c952' */
        document.getElementById("apiImage").src = data[129].url
    } catch (error) {
        document.getElementById("apiImage").src = 'https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg'
    }
}

leerApiFoto()