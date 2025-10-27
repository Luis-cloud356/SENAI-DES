const livros= 
[
    {
"titulo": "Harry Potter e a Pedra Filosofal",
"autor":"J.K.Rowling",
"nº de paginas":"224",
"genero":"Literatura fantastica",
"protagonista":"Harry Potter"
},
{
 "titulo":"One Piece Arco Alabasta",
 "autor": "Eiichiro Oda",
 "nº de paginas": "1199",
 "genero":"aventura e ação",
 "protagonista": "Monkey D. Luffy"
},
{
    "titulo":"Dragon Ball Super",
    "autor":"Akira Toriyama",
    "nº de paginas":"208",
    "genero":"ação, aventura e artes marciais",
    "protagonista":"Son Goku"
}
];

livros.forEach((livro)=>{
    if(livro.titulo === "Harry Potter e a Pedra Filosofal"){
        console.log(livro);
    }

}
);
var i;
livros.forEach((livro)=>{
    if(livro.titulo === "One Piece Arco Alabasta"){
        livros.splice(i,2);
    }
    i++;
}
);
console.log(livros);

var novo = {
    "titulo": "Livro 3",
    "autor": "Ciclano",
    "nº de paginas": "223",
    "genero": "ação",
    "protagonista": "Zoro"

};
livros.push(novo);

livros.forEach((livro) => {
    if(livro.titulo === "Dragon Ball Super"){
        livro.autor = "Akira Toriyama";
    }
});

console.log(livros);



