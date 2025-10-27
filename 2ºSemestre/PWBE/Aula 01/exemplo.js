// var - escopo global
// let - escopo local
// const - escopo global e o valor não altera

var nome = "Fulano"; //string
var idade = 50.5;
var habilitado = true;
const nascimento = 1875;

console.log(habilitado); // Imprime no terminal

console.log(typeof(habilitado)); // typeof retorna o tipo da variavel

/*
 soma +
 subtração -
 divisão /
 multiplicação *
 modulo %
*/

var a = 10;
var b = 10;

console.log(a+b);
/*
  Igualdade ==
  Diferente !=
  Estritamente Igual ===
  Estritamente Diferente !==
  Maior >
  Maior Igual >=
  Menor <
  Menor Igual <=
*/
if(a == b){
     console.log("Sao Iguais");
}else {
    console.log("Sao Diferentes");
}

switch(a){
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}

for(let i = 0; i < 10; i++){
    console.log(i);
}

a = 11;

while(a < 10){
    if(a == 5)}
       break;
       {
}

do {

}while(a < 10);