
const content = document.querySelector(".content");
const box = document.querySelector(".box");

const alunos = [
    {
        nome: "Valdemir",
        turma: "1ºA",
        nota1: 7,
        nota2: 7.5,
        nota3: 7
    },
    {
        nome: "Fulano",
        turma: "2ºB",
        nota1: 4,
        nota2: 6,
        nota3: 5
    },
    {
        nome: "Luis",
        turma: "2ºA",
        nota1: 7,
        nota2: 8.5,
        nota3: 10
    }
];

alunos.forEach((aluno) => {
    let novoCartao = box.cloneNode(true);

    novoCartao.querySelector("#nome").innerHTML = aluno.nome;
    novoCartao.querySelector("#turma").innerHTML = aluno.turma;

    let media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    if (media < 7) {
        novoCartao.style.backgroundColor = "red";
    } else {
        console.log("Aprovado");
        novoCartao.style.backgroundColor = "green";
    }
    novoCartao.querySelector("#media").innerHTML = media.toFixed(2);


    content.appendChild(novoCartao);
});


const busca = document.querySelector("#buscar");

busca.addEventListener("keyup", () => {
    content.childNodes.forEach((node) => {
        let nome = node.innerHTML;
        if (nome) {
            let conteudo = node.querySelector("#nome").innerHTML;
            if (conteudo) {
                if (conteudo.toLowerCase().includes(busca.value.toLowerCase())) {
                    node.style.display = "block";
                } else {
                    node.style.display = "none";
                }
            }
        }
    });
});

