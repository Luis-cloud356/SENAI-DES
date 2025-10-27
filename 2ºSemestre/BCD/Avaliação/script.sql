DROP DATABASE app;
CREATE DATABASE app;
USE app;

CREATE TABLE Clientes (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE Pedidos (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    cliente_id INTEGER,
    data_pedido INTEGER,
    status VARCHAR(40)
);

INSERT INTO clientes VALUES(DEFAULT, "Ciclano sem Nome", "ciclano.semnome@gmail.com");
INSERT INTO clientes VALUES(DEFAULT, "Beltrano da Silva", "beltrano.dasilva@gmail.com");
INSERT INTO clientes VALUES(DEFAULT, "Luis Henrique", "luis.henrique@gmail.com");

INSERT INTO pedidos VALUES(DEFAULT, "2", "2025-10-20", "feito");
INSERT INTO pedidos VALUES(DEFAULT, "1", "2025-09-10", "em andamento");
INSERT INTO pedidos VALUES(DEFAULT, "3", "2025-08-15", "cancelado");

UPDATE clientes SET email= "luis.silva@gmail.com"
WHERE id = 3;

DELETE FROM pedidos
WHERE id = 3;