
CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE Usuarios (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) not null,
    email VARCHAR(100),
    nascimento DATE
);

CREATE TABLE Livros (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) not null,
    autor VARCHAR(100) not null,
    publicacao INTEGER(4)
);

CREATE TABLE Emprestimos (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    usuario_Id INTEGER,
    livro_Id INTEGER,
    data_emprestimo DATE,
    data_devolucao DATE,
    FOREIGN KEY (livro_Id) REFERENCES Usuarios(id)
);

INSERT INTO usuarios VALUES (DEFAULT, "Luis da Silva", "luis.peneira@gmail.com", "2008-06-19");
INSERT INTO usuarios VALUES (DEFAULT, "Ciclano da Costa", "ciclano.costa@gmail.com","2010-10-20");
INSERT INTO usuarios VALUES (DEFAULT, "Beltrano Henrique", "beltrano.henrique@gmail.com", "2007-12-25");

SELECT * FROM usuarios;

SELECT * FROM usuarios
WHERE id = 2;

INSERT INTO livros VALUES (DEFAULT, "One Piece Saga Alabasta", "Euchiiro Oda", "2000");
INSERT INTO livros VALUES (DEFAULT, "One Piece Saga Wano", "Euchiiro Oda", "2018");
INSERT INTO livros VALUES (DEFAULT, "One Piece Saga Dressrosa", "Euchiiro Oda", "2013");

SELECT * FROM livros;

SELECT * FROM livros
WHERE id = 3;

INSERT INTO emprestimos VALUES (DEFAULT, 1,2, "2025-10-20", "2025-11-20");
INSERT INTO emprestimos VALUES (DEFAULT, 3,1, "2025-11-30", "2025-12-30");

SELECT * FROM livros;

SELECT usuario_id, data_emprestimo FROM emprestimos;

UPDATE emprestimos SET data_devolucao = "2025-11-25"
WHERE id = 1;

SELECT * FROM emprestimos
WHERE id = 1;


DELETE FROM emprestimos
WHERE id = 2;

SELECT * FROM usuarios;

SELECT * FROM usuarios
WHERE id = 3;