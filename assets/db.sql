-- TABELA ALUNO
CREATE TABLE Aluno(
	id INT AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
	ra VARCHAR(10) NOT NULL,
    email VARCHAR(100),
    telegram_id VARCHAR(20),
    telefone VARCHAR(20),
    PRIMARY KEY(id)
);

