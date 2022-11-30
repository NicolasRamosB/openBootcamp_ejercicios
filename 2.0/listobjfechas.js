// List, array o arreglos
const lista = [1, "", true, undefined, null, ""]

const lista2= new Array(3, "", true, undefined, null, "")

lista2[0] = "estoy llenito"

const lista4 = [lista, lista2]

console.log(lista4);


// Objetos 
const objetos = {
    name: "nome",
    años: 10,
    marca: "ADIDAS",
    contactos:["Gorka", "Martin", "Raul"],
    tarjeta:{
        marca: "Santander",
        almacenamiento: 32,
        bancos:{
            name: "name"
        }
    }
}

objetos.años = 2000
console.log(objetos.años);
console.log(objetos.tarjeta.marca);
console.log(objetos.contactos[0]);


// Fechas
// Librerias de apoyo Moment.js
const ahora = new Date()
console.log(ahora);

const milis = new Date(10)
console.log(milis);

const cadena = new Date("march 25 2020")
console.log(cadena);

const valores = new Date(2022, 0, 15)
console.log(valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1 ;
const año = ahora.getFullYear();
console.log( dia, mes, año);