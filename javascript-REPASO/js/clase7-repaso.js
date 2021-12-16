//alert('se está usando el archivo externo de js')



/*uso de arrays */
/*
const nombres=["Luis", "Tomas", "Lilian", "Cecilia"]
nombres.push=("Antonio")
console.log(nombres)
nombres.push=("")
*/

/*funcion flecha que simplifica el agregado de nombres nuevos */
/*
const manejodeNombres=(a)=>{
    nombres.push(a)
    console.log(nombres)
}
*/




/*objetos */

/*
const nombres=[]

const agregarNombre=()=>{
    let nombre={
    nombre:"luis",
    apellido:"navas"
    };
    nombres.push(nombre);
    console.log(nombres)
}

const otronombre=()=>{
    let nombre={
    nombre:"regulo",
    apellido:"perez"
    };
    console.log(nombre)
}
otronombre()
agregarNombre()
*/



/*clases constructoras */

class Persona {
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    mostrarNombre(){
        return this.nombre;
    }
}

let nombreIngresado=prompt("escribe tu nombre")
let persona1 = new Persona(nombreIngresado,"navas");
let persona2 = new Persona("juan","perez");
console.log(persona1.mostrarNombre());
console.log(persona2.mostrarNombre());

let persona3={
    nombre:"Pedro",
    apellido:"Mansilla"
}

class Vehiculo{
    encender(){
        return "el auto ha arrancado"
    }
}

let auto=new Vehiculo();
auto.velocidad="150km/h";
let moto={
    encender:()=>{
        return "la moto ha arrancado"
    }
}


console.log(auto.encender());
console.log(auto.velocidad);
console.log(moto.encender());


