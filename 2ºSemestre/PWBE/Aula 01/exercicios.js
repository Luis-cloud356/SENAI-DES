// Ex 1
var nome = "Luis Henrique Pereira da Silva";

console.log("Olá, "+nome+"!");

console.log("----------");

//Ex 2
var a = 17;
var b = 23;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log("----------");

//Ex 3
var altura = 5;
var largura = 10;
console.log(largura*altura);
console.log("A área do retângulo é :"+ largura*altura);

console.log("----------");

//Ex 4
var nascimento = 2008;
var idade = 2025-nascimento;

if(idade>=18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade");
}

console.log("----------");

//Ex 5
var numero = 11;

if(numero % 2==0){
    console.log("O número é par");
}else {
    console.log("O número é impar");
}


console.log("----------");

//Ex 6
var n1 = 6;
var n2 = 7;
var n3 = 7;
var media =(n1+n2+n3)/3;
if(media>=8){
    console.log("Nota A");
}else if(media >=7){
    console.log("Nota B");
}else if(media >= 6){
    console.log("Nota C");
}else{
    console.log("Reprovado");
} 
console.log("--------------");
//Ex 7
for(var i = 1; i <= 200; i++){
if( i % 2 == 0){
   console.log(i);
}
}
  console.log("-------------");
//Ex 8
var fatorial = 1;
for(let i =5; i >=1; i--){
  fatorial = i*fatorial;
}
console.log(fatorial);

//Ex 9
for(let i=1; i <=1000; i+=3){
    console.log(i);
}