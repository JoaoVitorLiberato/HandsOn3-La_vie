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
    email varchar(100) not null unique
);


create table atendimentos(
	psicologo_id int not null,
    paciente_id int not null,
	data_atendimento datetime,
    observacao varchar(1000),
    
    constraint FK_Psicologo_id foreign key(psicologo_id) references psicologo(id),
    constraint FK_Paciente_id foreign key(paciente_id) references paciente(id)

);


INSERT INTO psicologo (id, nome, email, senha, apresentacao)
VALUES (1, "Albert Stelio Klisman", "albertStelio@gmail.com", "123456albert",
 "Olá, eu sou o albert. Possui 10 anos de experiencia em trantornos celebrais."
 );

select * FROM psicologo
