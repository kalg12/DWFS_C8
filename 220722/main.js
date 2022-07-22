localStorage.setItem("ucampersNuevo", JSON.stringify([{id: uuidv4(), nombre: 'Marcos'},{id: uuidv4(),nombre:"Yessenia"},{id: uuidv4(),nombre:"Mariana"}]))

function pintarEnHTML () {
    let datos = JSON.parse(localStorage.getItem("ucampersNuevo"))
    console.log(datos[0].nombre)
    document.getElementById("tabla").innerHTML=`
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td id="nombre">${datos[0].nombre}</td>
        <td><button class="btn btn-primary">Editar</button></td>
        <td><button class="btn btn-danger">Eliminar</button></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td id="nombreDos">${datos[1].nombre}</td>
        <td><button class="btn btn-primary">Editar</button></td>
        <td><button class="btn btn-danger">Eliminar</button></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td id="nombreTres">${datos[2].nombre}</td>
        <td><button class="btn btn-primary">Editar</button></td>
        <td><button class="btn btn-danger">Eliminar</button></td>
      </tr>
    </tbody>
  </table>
    `
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

console.log(uuidv4());

pintarEnHTML();