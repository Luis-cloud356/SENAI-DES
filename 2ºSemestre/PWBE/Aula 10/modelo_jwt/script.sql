DROP DATABASE IF EXISTS modelo_jwt;
CREATE DATABASE modelo_jwt;
USE modelo_jwt;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    funcao VARCHAR(50) NOT NULL
);

CREATE TABLE pacientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    cpf VARCHAR(100) NOT NULL
);

CREATE TABLE consulta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT,
    medico_id INT,
    data_hora datetime  NOT NULL,
    status_consulta VARCHAR(20) NOT NULL,
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id),
    FOREIGN KEY (medico_id) REFERENCES usuarios(id)
);

INSERT INTO usuarios VALUES(DEFAULT,"Fulano","fulano@gmail.com","teste@123","administrador");
INSERT INTO usuarios VALUES(DEFAULT,"Cleber","cleber@gmail.com","teste@234","atendentes");
INSERT INTO usuarios VALUES(DEFAULT,"Claudio","claudio@gmail.com","teste@345","cardiologista");
INSERT INTO usuarios VALUES(DEFAULT,"Cleiton","cleiton@gmail.com","teste@345","ortopedia");
INSERT INTO usuarios VALUES(DEFAULT,"Roberto","roberto@gmail.com","teste@345","clinica geral");

INSERT INTO pacientes VALUES(DEFAULT,"Bento","dos Santos","1234-5678-44");
INSERT INTO pacientes VALUES(DEFAULT,"Guilherme","dos Santos","5234-5678-44");
INSERT INTO pacientes VALUES(DEFAULT,"Henrique","dos Santos","4234-5678-44");

INSERT INTO consulta VALUES(DEFAULT,2,1,"2026-09-10 10:25:00","agendada");
INSERT INTO consulta VALUES(DEFAULT,3,2,"2026-11-10 11:25:00","finalizada");
INSERT INTO consulta VALUES(DEFAULT,1,3,"2026-12-15 13:50:00","em andamento");

