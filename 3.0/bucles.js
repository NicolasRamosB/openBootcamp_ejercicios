// // Bucles

// // Bucles For

// for(inicializacion; condicin; actualizacion){
//     // Esto es el bucle.
// }

// // for(variable; mientras var sea menor que condicion; var contador){
// //     // Esto es el bucle.
// // }

// var array = [1,2,3,4,5,6]
// for (let index = 0; index < array.length; index++) {
//    console.log(array[index]);
// }

// // For...of  //Declara valor a cada una de la array 
// // Implementa valor a cada una de las ejecuciones.
// for (const valor of array) {
//    console.log(valor);
// }


// // forEach recorre y crea un nuevo array con los valores

// array.forEach(valor => {
//    console.log(valor);
// })

// // for...in 

// const objeto = {
//    title:"The Martian Chronicles",
//    author: "Ray Bradbury",
//    fecha: 1950,
//    url:"https://cdn.milenio.com/uploads/media/2019/10/26/sus-textos-son-considerados-como.jpg"
// }

// for (const propiedad in objeto) {
//   console.log(propiedad);
//   console.log(objeto[propiedad]);
// }
// // ////////////////////////////////////////

// // Bucles While
// // es como el for pero solo si la condicion se cumple

// let i = 0;
// let max = 10
// while (i < max) {
//    console.log(i);
//    i++
// }

// // Do...While
// // Primero ejecuta y despues cumple la condicion 

// do{
//    console.log(i);
//    i++
// }while (i < max);

// //////////////////////////////////////////////////////


// // Formas de controlar los bucles con continue y break

// // Casos espedificos donde se utiliza el Break y continue:

// // En casos muuuuy excepcionales. no son buenas practicas.
// let array = [1,2,3,4,5,6,7,8];

// for (let index = 0; index < array.length; index++) {
//    if (array[i] === 3) {
//       continue;
//    }
//    console.log(array[i]);
//    if (array[i] > 5) {
//       break;
//    }
// }


// Situaciones para salvar bucles

// let unidades = 0
// let decenas = 0
// bucleDecenas: while (true) {
//    // se encarga de las unidades
//    console.log(`El numero actual es: ${decenas}${unidades}`);
// //  se encarga de las decenas
// buclesUnidades: while (true) {
//       unidades++;
//       if (unidades === 10) {
//          unidades = 0
//          break buclesUnidades
//       }
//       if (decenas === 2) {
//          console.log(`El numero actual es: ${decenas}${unidades}`);
//          break bucleDecenas
//       }
//    }
//    decenas++;
   
// }

