create database la_vie;
use la_vie;


create table psicologo(
	id int primary key auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    senha varchar(16),
    aprensentacao varchar(1000) not null
);


create table paciente(
	id int primary key auto_increment,
    nome varchar(100) not null,
    idade int not null,
    email varchar(100) not null unique
);


create table atendimentos(
	id_psicologo int not null,
    id_paciente int not null,
	data_atendimento datetime,
    observacao varchar(1000),
    
    constraint FK_idPsicologo foreign key(id_psicologo) references psicologo(id),
    constraint FK_idPaciente foreign key(id_paciente) references paciente(id)

);



