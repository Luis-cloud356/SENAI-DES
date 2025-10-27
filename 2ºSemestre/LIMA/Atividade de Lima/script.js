const content = document.querySelector(".content");
const box = document.querySelector(".box");

const consultas = [
    {
    "id": 1,
    "paciente_nome": "Ana Costa",
    "telefone": "(11) 99999-1234",
    "medico_nome": "Dra. Camila",
    "especialidade": "Cardiologia",
    "data": "2024-09-25",
    "hora": "14:00",
    "status": "agendada"
  },
  {
    "id": 2,
    "paciente_nome": "Jose Silva",
    "telefone": "(11) 98888-5678",
    "medico_nome": "Dr. Rodrigo",
    "especialidade": "Clinico Geral",
    "data": "2024-09-26",
    "hora": "09:30",
    "status": "finalizada"
  },
  {
    "id": 3,
    "paciente_nome": "Maria Lima",
    "telefone": "(11) 97777-4321",
    "medico_nome": "Dra. Camila",
    "especialidade": "Cardiologia",
    "data": "2024-09-27",
    "hora": "10:15",
    "status": "em andamento"
  },
  {
    "id": 4,
    "paciente_nome": "Carlos Pereira",
    "telefone": "(11) 96666-1111",
    "medico_nome": "Dr. Rodrigo",
    "especialidade": "Clinico Geral",
    "data": "2024-09-28",
    "hora": "15:00",
    "status": "agendada"
  },
  {
    "id": 5,
    "paciente_nome": "Julia Souza",
    "telefone": "(11) 95555-8888",
    "medico_nome": "Dr. Bruno",
    "especialidade": "Ortopedia",
    "data": "2024-09-29",
    "hora": "13:45",
    "status": "agendada"
  }

];

consultas.forEach((consulta) => {
    let novoCartao = box.cloneNode(true);

    novoCartao.querySelector("#paciente_nome").innerHTML = consulta.paciente_nome;
   

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
