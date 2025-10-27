// const numeros = [1,2,3,4,5];

// for(let i = 0; i < numeros.length; i++){
//     console.log("[" + i + "] ->" + numeros[i]);
// }

// function soma(a, b){
//    // return a + b;
//    console.log(a + b);
// }

// //console.log( soma(2, 3) );
// soma(5, 5);


// const soma = (a, b) => {
//     console.log(a + b);
// }

// soma(8, 2);

const numeros = [1,2,3,4,5];
const marcas = ["Nike","Adidas","Jaguar"];
const usuarios = [
    {
        "nome": "Fulano",
        "matricula": "1234",
        "telefone": "(12) 1234-4321",
        "sobrenome": "da Silva"
    },
    {
        "nome": "Beltrano",
        "matricula": "4567",
        "telefone": "(32) 4567-7894",
        "sobrenome": "Cunha"
    }
   
];

// function imprime(value){
//     console.log("value - " + value);
// }

// marcas.forEach(imprime);

marcas.forEach((value) => {
    //console.log("Value - " + value);
    if(value === "Nike"){
        console.log("Encontrei");
    }
});

usuarios.forEach((usuario) => {
    if(usuario.matricula === "4567"){
    console.log(usuario.nome + " " + usuario.sobrenome),
    console.log(usuario.telefone)    }
});


// const carro = {
//     "ano": 2000,
//     "cor": "vermelho",
//     "modelo": "Uno",
//     "marco": "Fiat",
//     "escada": true,
//     "placa": "abc1234"
// }


// console.log(carro);