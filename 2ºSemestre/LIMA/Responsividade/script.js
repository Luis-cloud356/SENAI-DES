const menu = document.querySelector("#menu");

menu.addEventListener("click", function () {
       const nav = document.querySelector("nav");
       const leftNav = nav.style.left;

       if (leftNav === "" || leftNav === "-200px") {
              nav.style.left = "0";
       } else {
              nav.style.left = "-200px";
       }
});

const content = document.querySelector(".content");
const box = document.querySelector(".box");

const produtos = [
       {
              img: "./assets/chuteiraney.jpg",
              nome: "Chuteira Neymar",
              valor: 369.99
       },
       {
              img: "./assets/chuteira2.jpg",
              nome: "Chuteira do Messi",
              valor: 380.00
       },
       {
              img: "./assets/chuteiracr7.jpg",
              nome: "Chuteira do Cr7",
              valor: 450.00
       }
];

produtos.forEach((produto) => {
       let novoCartao = box.cloneNode(true);

       novoCartao.querySelector("img").src = produto.img;
       novoCartao.querySelector("#nome").innerHTML = produto.nome;
       novoCartao.querySelector("#valor").innerHTML = "R$" + produto.valor;

       content.appendChild(novoCartao);
});


const busca = document.querySelector("#buscar");

busca.addEventListener("keyup", () => {
       content.childNodes.forEach((node) => {
              let conteudo = node.innerHTML;
              if (conteudo) {
                     if (conteudo.toLowerCase().includes(busca.value.toLowerCase())) {
                            node.style.display = "block";
                     } else {
                            node.style.display = "none";
                     }
              }
       });
});

