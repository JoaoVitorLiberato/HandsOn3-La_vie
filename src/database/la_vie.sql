create database la_vie;
use la_vie;


create table psicologo(
	id int primary key auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    senha varchar(16),
    apresentacao varchar(1000) not null
);




create table paciente(
	id int primary key auto_increment,
    nome varchar(100) not null,
    idade int not null,
    email varchar(100) not null unique,
    senha varchar(16) not null
);


create table atendimentos(
	psicologo_id int not null,
    paciente_id int not null,
	data_atendimento datetime,
    observacao varchar(1000),
    
    constraint FK_Psicologo_id foreign key(psicologo_id) references psicologo(id),
    constraint FK_Paciente_id foreign key(paciente_id) references paciente(id)

);

-- Exemplos de Psicologos

INSERT INTO psicologo (nome, email, senha, apresentacao)
VALUES ("Albert Stelio Klisman", "albertStelio@teste.com", "12345",
 "Ser feliz sem motivo é a mais autêntica forma de felicidade."
 );
 
 INSERT INTO psicologo (nome, email, senha, apresentacao)
VALUES ("Livia Lavinon Oliver", "LavinonOlivero@teste.com", "12345",
 "Ser feliz sem motivo é a mais autêntica forma de felicidade."
 );
 
  INSERT INTO psicologo (nome, email, senha, apresentacao)
VALUES ("Alan Santissimo", "SantisimoAlan@teste.com", "12345",
 "Ser feliz sem motivo é a mais autêntica forma de felicidade."
 );
 
   INSERT INTO psicologo (nome, email, senha, apresentacao)
VALUES ("Tales dos Santos", "talesSantos@teste.com", "12345",
 "Ser feliz sem motivo é a mais autêntica forma de felicidade."
 );
 
    INSERT INTO psicologo (nome, email, senha, apresentacao)
VALUES ("João Barreto", "barretoDa51@teste.com", "12345",
 "Ser feliz sem motivo é a mais autêntica forma de felicidade."
 );

 
 

select * FROM psicologo
