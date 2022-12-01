// Bifurcaciones If... else
let saldo = 50;
let efectivo = 20;
// Condicion con un solo resultado
if (efectivo < saldo) {
  console.log("Puedes sacar dinero");
}

// Condicion con dos resultados
if (efectivo > saldo) {
  console.log("Es verdadero");
} else {
  console.log("Es Falso");
}

// If else + if else
let nota = 5;

if (nota === 5) {
  console.log("Aprobado");
} else if (nota === 4) {
  console.log("No legas a la nota");
} else if (nota < 4) {
  console.log("Desaprobado");
} else {
  console.log("Error, no existe esa nota");
}

// Switch
switch (nota) {
  case 5:
    console.log("Aprobado");
    break;

  case 4:
    console.log("No legas a la nota");
    break;

  case nota < 4:
    console.log("Error, no existe esa nota");
    break;

  default:
    console.log("Error, no existe esa nota");
    break;
}

// Comparaciones.


// Igualdad

// Debil
// Compara Valore : "=="
if (5 =="5") {
  console.log("5 igual 5");
}
// Estricto
// Compara valor y tipo: "==="
if (5 === 5) {
  console.log("5 Estrictamente igual 5");
}

// Desigualdad
// Valor
if (5 != 10) {
  console.log("5 es diferente a 10");
  
}
// Valor y Tipo. Estricto
if (5 !== 10) {
  console.log("5 es diferente a 10");
}

