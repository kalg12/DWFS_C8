class PersonaBanco{
    constructor(){
        this.nombre = ""
        this.apellido = ""
        this.edad = 0
        this.dinero = 0
        //método para depositar dinero
        this.depositar = function(dinero){
            this.dinero += dinero
        }
        //método para retirar dinero
        this.retirar = function(dinero){
            this.dinero -= dinero
        }
        //Método para que nos muestre si la persona puede retirar dinero o no hay suficiente dinero
        this.retirarDinero = function(dinero){
            if(this.dinero < dinero){
                console.log(`No puedes retirar $${dinero}, tu saldo actual es de $${this.dinero}`)
            }else{
                this.retirar(dinero)
            }
        }
    }
}

const personaUno = new PersonaBanco
personaUno.nombre = "Kevin"
personaUno.apellido = "Luciano"
personaUno.edad = 27
personaUno.dinero = 0

console.log(personaUno.dinero) // 0
personaUno.depositar(500)
console.log(personaUno.dinero) // 500
personaUno.depositar(200)
console.log(personaUno.dinero) // 700
personaUno.retirarDinero(701)