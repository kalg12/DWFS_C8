const nombre = "Kevin"
const apellido = "Luciano"
let edad = 27


let texto = document.getElementById("titutlo").innerHTML = `Hola ucampers, soy ${nombre} ${apellido} y tengo ${edad} años`

const obtenerDatos = () => {
    const obtenerCorreo = document.getElementById("email").value
    const obtenerContrasenia = document.getElementById("contrasenia").value
    if(obtenerCorreo === '' || obtenerContrasenia === '') {
        alert("El campo correo y/o constraseña no deben de ir vacios")
    }else{
        console.log(obtenerCorreo)
        console.log(obtenerContrasenia)
        document.getElementById("correo").innerHTML = `
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Correo</th>
      <th scope="col">Contraseña</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${obtenerCorreo}</td>
      <td>${obtenerContrasenia}</td>
    </tr>
  </tbody>
</table>
        `
    }
}
