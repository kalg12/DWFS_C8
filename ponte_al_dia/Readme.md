# Instrucciones

Crea un objeto con el nombre bootcamp con las siguientes propiedades

 ```
 const curso = {
	nombre: 'Ucamp',
	tipo: 'fullstack',
	modulos: [
		{ nombre: 'css', cursado: true },
		{ nombre: 'javascript', cursado: true },
        { nombre: 'react', cursado: false }
],
    saludar: (nombre) => {
        console.log(`Hola soy ${nombre}`)
    }
}
```

Muestra las propiedades nombre y tipo en un console.log.

Ejecuta la función saludar. Esta función se le debe pasar un nombre.

Como último, muestra en un console.log la propiedad nombre del arreglo de modulos. Para esto deberas usar forEach.
