create database grao;
use grao;

create table loja (
	id_loja int auto_increment,
	rua varchar(200) not null,
	cidade varchar(200) not null,
	bairro varchar(200) not null,
	numero int not null,
	telefone char (11) not null,
	constraint loja_pk primary key (id_loja)
);

create table funcionario(
	id_funcionario int auto_increment, 
	id_gerente int,
	cpf char (11) unique not null,
	nome varchar(200) not null,
	email varchar(100) unique not null,
	senha varchar(30) not null,
	rua varchar(200) not null,
	cidade varchar(200) not null,
	bairro varchar(200) not null,
	numero int not null,
	salario float not null,
	cargo varchar (15) check (cargo in ('VENDEDOR','ESTOQUISTA')),
	constraint funcionario_pk primary key (id_funcionario),
	constraint id_gerente_fk foreign key (id_gerente) references funcionario (id_funcionario) on delete set null
	
);

create table telefone(
	id_telefone int auto_increment,
	id_funcionario int not null,
	numero char(11),
	constraint telefone_pk primary key (id_telefone),
	constraint funcionario_t_fk foreign key (id_funcionario) references funcionario (id_funcionario) on delete cascade
);

create table cliente(
	id_cliente int auto_increment,
	cpf char (11) unique,
	nome varchar(200),
	telefone char(11),
	pontos_fidelidade int default 0,
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
	id_pedido int auto_increment,
	data_hora dateTime default now(),
	valor_total float not null default 0,
	constraint pedido_pk primary key (id_pedido)
	
);

create table funcionario_loja(
	id_funcionario int,
	id_loja int,
	constraint funcionario_loja_pk primary key (id_funcionario, id_loja),
	constraint funcionario_fk foreign key (id_funcionario) references funcionario (id_funcionario) on delete cascade,
	constraint loja_fk foreign key (id_loja) references loja (id_loja) on delete cascade
);

create table cliente_loja(
	id_cliente int,
	id_loja int,
	constraint cliente_loja_pk primary key (id_cliente, id_loja),
	constraint cliente_fk foreign key (id_cliente) references cliente (id_cliente) on delete cascade,
	constraint loja_c_fk foreign key (id_loja) references loja (id_loja) on delete cascade
);

create table produto_loja(
	id_loja int,
	codigo_produto char(13),
	quantidade int default 0,
	constraint produto_loja_pk primary key (id_loja, codigo_produto),
	constraint loja_p_fk foreign key (id_loja) references loja (id_loja) on delete cascade,
	constraint produto_fk foreign key (codigo_produto) references produto (codigo_barras) on delete cascade
);

create table pedido_produto(
	codigo_produto char(13),
	id_pedido int,
	quantidade int not null,
	constraint pedido_produto_pk primary key (codigo_produto, id_pedido),
	constraint produto_p_fk foreign key (codigo_produto) references produto (codigo_barras) on delete cascade,
	constraint pedido_p_fk foreign key (id_pedido) references pedido (id_pedido) on delete cascade
);

create table venda(
	id_funcionario int,
	id_pedido int,
	id_cliente int,
	pontos int default 0,
	
	constraint venda_pk primary key (id_funcionario, id_pedido, id_cliente),
	constraint vendedor_fk foreign key (id_funcionario) references funcionario (id_funcionario) on delete cascade,
	constraint pedido_v_fk foreign key (id_pedido) references pedido (id_pedido) on delete cascade,
	constraint cliente_v_fk foreign key (id_cliente) references cliente (id_cliente) on delete cascade
);

#criar tabelas backup

create table bk_funcionario(
	id_funcionario int, 
	id_gerente int,
	cpf char (11),
	nome varchar(200),
	email varchar(100),
	rua varchar(200),
	cidade varchar(200),
	bairro varchar(200),
	numero int,
	salario float,
	cargo varchar (15),
	data_modificacao datetime,
	operacao varchar(10)
);


create table bk_produto(
	codigo_barras char(13),
	descricao varchar(200),
	valor_unitario float,
	data_modificacao datetime,
	operacao varchar(10)
);

create table bk_pedido(
	id_pedido int,
	data_hora dateTime,
	valor_total float,
	data_modificacao datetime,
	operacao varchar(10)
);

create table bk_venda(
	id_funcionario int,
	id_pedido int,
	id_cliente int,
	pontos int default 0,
	data_modificacao datetime,
	operacao varchar(10)
);



delimiter //

#função para adicionar pontos
create trigger addPontosFidelidade
after insert on venda
for each row
begin
	update cliente 
	set pontos_fidelidade = pontos_fidelidade + new.pontos
	where id_cliente = new.id_cliente;
end;
//

#trigger de backups

#funcionario
create trigger trigger_insert_bk_funcionario
after insert on funcionario
for each row
begin
	insert into bk_funcionario(
		id_funcionario, 
		id_gerente,
		cpf,
		nome,
		email,
		rua,
		cidade,
		bairro,
		numero,
		salario,
		cargo,
		data_modificacao,
		operacao
	)values(
		new.id_funcionario, 
		new.id_gerente,
		new.cpf,
		new.nome,
		new.email,
		new.rua,
		new.cidade,
		new.bairro,
		new.numero,
		new.salario,
		new.cargo,
		now(),
		'INSERT'
	);
end;
//
create trigger trigger_update_bk_funcionario
before update on funcionario
for each row
begin
	insert into bk_funcionario(
		id_funcionario, 
		id_gerente,
		cpf,
		nome,
		email,
		rua,
		cidade,
		bairro,
		numero,
		salario,
		cargo,
		data_modificacao,
		operacao
	)values(
		old.id_funcionario, 
		old.id_gerente,
		old.cpf,
		old.nome,
		old.email,
		old.rua,
		old.cidade,
		old.bairro,
		old.numero,
		old.salario,
		old.cargo,
		now(),
		'UPDATE'
	);
end;
//
create trigger trigger_delete_bk_funcionario
before delete on funcionario
for each row
begin
	insert into bk_funcionario(
	id_funcionario, 
		id_gerente,
		cpf,
		nome,
		email,
		rua,
		cidade,
		bairro,
		numero,
		salario,
		cargo,
		data_modificacao,
		operacao
	)values(
		old.id_funcionario, 
		old.id_gerente,
		old.cpf,
		old.nome,
		old.email,
		old.rua,
		old.cidade,
		old.bairro,
		old.numero,
		old.salario,
		old.cargo,
		now(),
		'DELETE'
	);
end;
//

#produto
create trigger trigger_insert_bk_produto
after insert on produto
for each row
begin
	insert into bk_produto (
		codigo_barras,
		descricao,
		valor_unitario,
		data_modificacao,
		operacao
	) values (
		new.codigo_barras,
		new.descricao,
		new.valor_unitario,
		now(),
		'INSERT'
	);
end;
//
create trigger trigger_update_bk_produto
before update on produto
for each row
begin
	insert into bk_produto (
		codigo_barras,
		descricao,
		valor_unitario,
		data_modificacao,
		operacao
	) values (
		old.codigo_barras,
		old.descricao,
		old.valor_unitario,
		now(),
		'UPDATE'
	);
end;
//
create trigger trigger_delete_bk_produto
before delete on produto
for each row
begin
	insert into bk_produto (
		codigo_barras,
		descricao,
		valor_unitario,
		data_modificacao,
		operacao
	) values (
		old.codigo_barras,
		old.descricao,
		old.valor_unitario,
		now(),
		'DELETE'
	);
end;
//
#pedido
create trigger trigger_insert_bk_pedido
after insert on pedido
for each row
begin
	insert into bk_pedido (
		id_pedido,
		data_hora,
		valor_total,
		data_modificacao,
		operacao
	) values (
		new.id_pedido,
		new.data_hora,
		new.valor_total,
		now(),
		'INSERT'
	);
end;
//
create trigger trigger_update_bk_pedido
before update on pedido
for each row
begin
	insert into bk_pedido (
		id_pedido,
		data_hora,
		valor_total,
		data_modificacao,
		operacao
	) values (
		old.id_pedido,
		old.data_hora,
		old.valor_total,
		now(),
		'UPDATE'
	);
end;

//
create trigger trigger_delete_bk_pedido
before delete on pedido
for each row
begin
	insert into bk_pedido (
		id_pedido,
		data_hora,
		valor_total,
		data_modificacao,
		operacao
	) values (
		old.id_pedido,
		old.data_hora,
		old.valor_total,
		now(),
		'DELETE'
	);
end;

//
#venda
create trigger trigger_insert_bk_venda
after insert on venda
for each row
begin
	insert into bk_venda (
		id_funcionario,
		id_pedido,
		id_cliente,
		pontos,
		data_modificacao,
		operacao
	) values (
		new.id_funcionario,
		new.id_pedido,
		new.id_cliente,
		new.pontos,
		now(),
		'INSERT'
	);
end;
//
create trigger trigger_update_bk_venda
before update on venda
for each row
begin
	insert into bk_venda (
		id_funcionario,
		id_pedido,
		id_cliente,
		pontos,
		data_modificacao,
		operacao
	) values (
		old.id_funcionario,
		old.id_pedido,
		old.id_cliente,
		old.pontos,
		now(),
		'UPDATE'
	);
end;
//
create trigger trigger_delete_bk_venda
before delete on venda
for each row
begin
	insert into bk_venda (
		id_funcionario,
		id_pedido,
		id_cliente,
		pontos,
		data_modificacao,
		operacao
	) values (
		old.id_funcionario,
		old.id_pedido,
		old.id_cliente,
		old.pontos,
		now(),
		'DELETE'
	);
end;
//

#trigger para somar preço dos produtos no pedido
CREATE TRIGGER after_insert_pedido_produto
AFTER INSERT ON pedido_produto
FOR EACH ROW
BEGIN
    UPDATE pedido p
    JOIN (
        SELECT 
            id_pedido, 
            SUM(pp.quantidade * pr.valor_unitario) AS total
        FROM 
            pedido_produto pp
        JOIN 
            produto pr ON pp.codigo_produto = pr.codigo_barras
        WHERE 
            pp.id_pedido = NEW.id_pedido
        GROUP BY 
            pp.id_pedido
    ) calc ON p.id_pedido = calc.id_pedido
    SET p.valor_total = calc.total;
end //

CREATE TRIGGER after_update_pedido_produto
AFTER UPDATE ON pedido_produto
FOR EACH ROW
BEGIN
    UPDATE pedido p
    JOIN (
        SELECT 
            id_pedido, 
            SUM(pp.quantidade * pr.valor_unitario) AS total
        FROM 
            pedido_produto pp
        JOIN 
            produto pr ON pp.codigo_produto = pr.codigo_barras
        WHERE 
            pp.id_pedido = NEW.id_pedido
        GROUP BY 
            pp.id_pedido
    ) calc ON p.id_pedido = calc.id_pedido
    SET p.valor_total = calc.total;
end //

CREATE TRIGGER after_delete_pedido_produto
AFTER DELETE ON pedido_produto
FOR EACH ROW
BEGIN
    UPDATE pedido p
    JOIN (
        SELECT 
            id_pedido, 
            SUM(pp.quantidade * pr.valor_unitario) AS total
        FROM 
            pedido_produto pp
        JOIN 
            produto pr ON pp.codigo_produto = pr.codigo_barras
        WHERE 
            pp.id_pedido = OLD.id_pedido
        GROUP BY 
            pp.id_pedido
    ) calc ON p.id_pedido = calc.id_pedido
    SET p.valor_total = IFNULL(calc.total, 0);
end //

delimiter ;
