
create table loja (
	id_loja int,
	rua varchar(200) not null,
	cidade varchar(200) not null,
	bairro varchar(200) not null,
	numero int not null,
	telefone char (11) not null,
	constraint loja_pk primary key (id_loja)
);

create table funcionario(
	id_funcionario int, 
	id_gerente int,
	cpf char (11) unique not null,
	nome varchar(200) not null,
	email varchar(100) unique not null,
	rua varchar(200) not null,
	cidade varchar(200) not null,
	bairro varchar(200) not null,
	numero int not null,
	salario float not null,
	cargo varchar (15) check (cargo in ('VENDEDOR','ESTOQUISTA')),
	constraint funcionario_pk primary key (id_funcionario),
	constraint id_gerente_fk foreign key (id_gerente) references funcionario (id_funcionario)
);

create table telefone(
	id_telefone int,
	id_funcionario int not null,
	numero char(11),
	constraint telefone_pk primary key (id_telefone),
	constraint funcionario_t_pk foreign key (id_funcionario) references funcionario (id_funcionario)
);

create table cliente(
	id_cliente int,
	cpf char (11) unique,
	nome varchar(200),
	telefone char(11),
	pontos_fidelidade int default'0',
	fidelizado boolean default false,
	constraint cliente_pk primary key (id_cliente)
);

create table produto(
	codigo_barras char(13),
	descricao varchar(200) not null,
	valor_unitario float not null,
	constraint produto_pk primary key (codigo_barras)
);

create table pedido(
	id_pedido int,
	data_hora dateTime not null,
	valor_total float not null,
	constraint pedido_pk primary key (id_pedido)
);

create table funcionario_loja(
	id_funcionario int,
	id_loja int,
	constraint funcionario_loja_pk primary key (id_funcionario, id_loja),
	constraint funcionario_fk foreign key (id_funcionario) references funcionario (id_funcionario),
	constraint loja_fk foreign key (id_loja) references loja (id_loja)
);

create table cliente_loja(
	id_cliente int,
	id_loja int,
	constraint cliente_loja_pk primary key (id_cliente, id_loja),
	constraint cliente_fk foreign key (id_cliente) references cliente (id_cliente),
	constraint loja_c_fk foreign key (id_loja) references loja (id_loja)
);

create table produto_loja(
	id_loja int,
	codigo_produto char(13),
	quantidade int default '0',
	constraint produto_loja_pk primary key (id_loja, codigo_produto),
	constraint loja_p_fk foreign key (id_loja) references loja (id_loja),
	constraint produto_fk foreign key (codigo_produto) references produto (codigo_barras)
);

create table pedido_produto(
	codigo_produto char(13),
	id_pedido int,
	quantidade int not null,
	constraint pedido_produto_pk primary key (codigo_produto, id_pedido),
	constraint produto_p_fk foreign key (codigo_produto) references produto (codigo_barras),
	constraint pedido_p_fk foreign key (id_pedido) references pedido (id_pedido)
);

create table venda(
	id_funcionario int,
	id_pedido int,
	id_cliente int,
	pontos int default '0',
	constraint venda_pk primary key (id_funcionario, id_pedido, id_cliente),
	constraint vendedor_fk foreign key (id_funcionario) references funcionario (id_funcionario),
	constraint pedido_v_fk foreign key (id_pedido) references pedido (id_pedido),
	constraint cliente_v_fk foreign key (id_cliente) references cliente (id_cliente)
);

#trigger para adicionar pontos
create trigger addPontosFidelidade
after insert on venda
for each row
begin
	update cliente 
	set pontos_fidelidade = pontos_fidelidade + new.pontos
	where id_cliente = new.id_cliente;
end