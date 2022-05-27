create database la_vie;
use la_vie;


create table psicologo(
	id int primary key auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null,
    senha varchar(300),
    apresentacao varchar(1000) not null
    
);

-- drop table psicologo;



create table paciente(
	id int primary key auto_increment,
    nome varchar(100) not null,
    idade date not null,
    email varchar(100) not null unique
 
);

-- drop table paciente;


create table atendimentos(
	id int primary key auto_increment,
    paciente_id int not null,
    psicologo_id int not null,
	data_atendimento date not null,
    observacao varchar(1000),
	
    constraint FK_PacienteID foreign key(paciente_id) references paciente(id) on delete cascade,
    constraint FK_Psicologo_id foreign key(psicologo_id) references psicologo(id) on delete cascade

);


-- drop table atendimentos;

-- Exemplos de Psicologos

INSERT INTO psicologo (nome, email, senha, apresentacao)
VALUES ("Albert Stelio Klisman", "albertStelio@teste.com", "12345678",
 "Ser feliz sem motivo é a mais autêntica forma de felicidade."
 );
 
 INSERT INTO psicologo (nome, email, senha, apresentacao)
VALUES ("Livia Lavinon Oliver", "LavinonOlivero@teste.com", "12345678",
 "Ser feliz sem motivo é a mais autêntica forma de felicidade."
 );
 
  INSERT INTO psicologo (nome, email, senha, apresentacao)
VALUES ("Alan Santissimo", "SantisimoAlan@teste.com", "12345678",
 "Ser feliz sem motivo é a mais autêntica forma de felicidade."
 );
 
   INSERT INTO psicologo (nome, email, senha, apresentacao)
VALUES ("Tales dos Santos", "talesSantos@teste.com", "12345678",
 "Ser feliz sem motivo é a mais autêntica forma de felicidade."
 );
 
    INSERT INTO psicologo (nome, email, senha, apresentacao)
VALUES ("João Barreto", "barretoDa51@teste.com", "12345678",
 "Ser feliz sem motivo é a mais autêntica forma de felicidade."
 );
 

select * FROM psicologo;




-- Exemplos de Pacientes
 INSERT INTO paciente (nome, idade, email)
VALUES ("Stefanny Decapri", "1998/06/15", "Decapri@teste.com" );

 INSERT INTO paciente (nome, idade, email)
VALUES ("João Batista", "1968/06/15", "joaobatista@teste.com" );

 INSERT INTO paciente (nome, idade, email)
VALUES ("Avril Lavigne", "1998/06/15", "AvrilProd@teste.com" );
 
 select * FROM paciente;
 
 
 
 
  -- Exemplos de Atendimentos
 
 INSERT INTO atendimentos ( paciente_id, psicologo_id, data_atendimento, observacao)
VALUES ( 4, 1,  "2020/04/10",
 "O amigo é maluco beleza. Raul ."
 );
 
  INSERT INTO atendimentos ( paciente_id, psicologo_id, data_atendimento, observacao)
VALUES ( 6, 5, "2018/05/20",
 "O amigo é maluco beleza. Raul ."
 );
 
 

 
  select * FROM atendimentos;
 
