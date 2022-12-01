let numeroF = 10;
let i = numeroF-1;


while(numeroF){
    numeroF *= i;
    i--;
    if (i <= 1) break;
}
console.log(numeroF);