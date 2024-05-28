
use grao;

#id_loja (int), rua(varchar),cidade(varchar),bairro(varchar),numero(int),telefone(char)
insert into loja values (1,'RUA A', 'OLINDA','JARDIM ATLANTICO',123,'8134650000'),
				 (2,'AVENIDA DOMINGOS FERREIRA', 'RECIFE','BOA VIAGEM',4405,'8134651111'),
				 (3,'AVENIDA PRESIDENTE KENNEDY', 'JABOATAO DOS GUARARAPES','CANDEIAS',5263,'8134652222');

#id_funcionario(int),id_gerente(int),cpf char,nome varchar,
#email varchar,rua varchar,cidade varchar,bairro varchar,numero int,salario float,
#cargo varchar check (cargo in ('VENDEDOR','ESTOQUISTA'))

#gerentes
insert into funcionario values (1,1,'45195257051','JOAO FELIX','joaofelix@gmail.com','1234','RUA B', 'OLINDA', 'JARDIM ATLANTICO',31,3500.70,'VENDEDOR'),
						(2,2,'34129306014','FERNANDO JOSE','fe_jose@gmail.com','1234','RUA BRUNO VELOSO', 'RECIFE', 'BOA VIAGEM',123, 4000.00,'VENDEDOR'),
						(3,3,'58476639007','ROBERTO CARLOS','rcarlos@gmail.com','1234','RUA JORGE', 'JABOATAO DOS GUARARAPES', 'CAVALEIRO',55, 3152.43,'VENDEDOR');
#não-gerentes
insert into funcionario (id_funcionario,cpf,nome,email,senha,rua,cidade,bairro,numero,salario,cargo) values (4,'08221354007','PAULO GOUVEIA','pg192@gmail.com','1234', 'RUA C', 'OLINDA', 'OURO PRETO', 12,1513.73,'ESTOQUISTA'),
(5,'21043624074','JOSE ROBERTO','beto123@gmail.com','1234', 'RUA RECIFE', 'OLINDA', 'VARADOURO', 45,2000.00,'VENDEDOR'),
(6,'67068243053','RAUL FILHO','raulzinho@gmail.com','1234', 'TRAVESSA OLINDA', 'OLINDA', 'SANTA TEREZA', 07,2120.77,'VENDEDOR'),
(7,'75369243022','MARCOS SILVA','msilva@gmail.com','1234', 'RUA AMORIM', 'OLINDA', 'BULTRINS', 23,1875.50,'ESTOQUISTA'),
(8,'85620347091','CARLA MENEZES','carlam@gmail.com','1234', 'AV. PRESIDENTE KENNEDY', 'OLINDA', 'CAIXA DAGUA', 321,2450.35,'VENDEDOR'),
(9,'98235461034','FERNANDO ALVES','falves@gmail.com','1234', 'RUA DO SOL', 'OLINDA', 'JARDIM ATLANTICO', 54,1980.90,'VENDEDOR'),
(10,'60948327056','ANA COSTA','anacosta@gmail.com','1234', 'RUA DAS FLORES', 'OLINDA', 'AMARO BRANCO', 32,1850.75,'ESTOQUISTA'),
(11,'21457683019','BRUNO SANTOS','bsantos@gmail.com','1234', 'AV. GETULIO VARGAS', 'OLINDA', 'BARRA DE JANGADA', 90,2235.65,'VENDEDOR'),
(12,'73846109283','MARIA FERNANDA','mfernanda@gmail.com','1234', 'RUA BEIRA MAR', 'OLINDA', 'RIO DOCE', 120,2320.50,'VENDEDOR'),
(13,'57392016428','GABRIEL NASCIMENTO','gabriel.n@gmail.com','1234', 'RUA PRINCESA ISABEL', 'OLINDA', 'CIDADE TABAJARA', 15,2105.00,'ESTOQUISTA'),
(14,'31056482937','JULIANA PEREIRA','juliana.p@gmail.com','1234', 'RUA DO HORIZONTE', 'OLINDA', 'BARRA NOVA', 78,1995.80,'VENDEDOR'),
(15,'87465392017','RICARDO LIMA','ricardo.l@gmail.com','1234', 'RUA DAS ACACIAS', 'OLINDA', 'GUADALUPE', 37,2145.90,'VENDEDOR'),
(17,'38572019482','CARLOS ALBERTO','calberto@gmail.com','1234', 'RUA AURORA', 'RECIFE', 'SANTO AMARO', 45,2200.00,'VENDEDOR'),
(18,'74829301647','LARISSA LIMA','larissa.l@gmail.com','1234', 'AV. CONDE DA BOA VISTA', 'RECIFE', 'BOA VISTA', 187,2300.45,'VENDEDOR'),
(19,'61928305784','ROBERTO FREITAS','rfreitas@gmail.com','1234', 'RUA IMPERIAL', 'RECIFE', 'SAO JOSE', 120,1985.30,'ESTOQUISTA'),
(20,'83019274650','FLAVIA SOUZA','flavia.s@gmail.com','1234', 'RUA DO PRÍNCIPE', 'RECIFE', 'SANTO ANTONIO', 59,2150.75,'VENDEDOR'),
(21,'51274930281','ANTONIO CARLOS','antonio.c@gmail.com','1234', 'RUA DA LAGOA', 'JABOATAO DOS GUARARAPES', 'PRAZERES', 85,2100.25,'VENDEDOR'),
(22,'40561273890','MARIA CLARA','mclara@gmail.com','1234', 'AV. BARRETO DE MENEZES', 'JABOATAO DOS GUARARAPES', 'CAVALEIRO', 100,2250.40,'VENDEDOR'),
(23,'70923846512','JOÃO VICTOR','joaovictor@gmail.com','1234', 'RUA VISCONDE DE SUASSUNA', 'JABOATAO DOS GUARARAPES', 'PRAIA', 22,2075.60,'ESTOQUISTA'),
(24,'83294710563','LETICIA GOMES','leticiasg@gmail.com','1234', 'RUA JOAO DE BARROS', 'JABOATAO DOS GUARARAPES', 'PIEDADE', 47,2190.80,'VENDEDOR');
										
					
#id_telefone int,id_funcionario int,numero char
insert into telefone values (1,1,'81998989898');
insert into telefone (id_funcionario, numero) values (2,'81997411092'),(3,'81998234567'),(4,'81998123456'),
(5,'81997345678'),(6,'81997234567'),(7,'81997123456'),(8,'81997012345'),(9,'81996987654'),
(10,'81996876543'),(11,'81996765432'),(12,'81996654321'),(13,'81996543210'),(14,'81996432109'),
(15,'81996321098'),(17,'81996109876'),(18,'81996098765'),(19,'81995987654'),
(20,'81995876543'),(21,'81995765432'),(22,'81995654321'),(23,'81995543210'),(24,'81995432109');

#id_cliente int,cpf char,nome varchar,telefone char,
#pontos_fidelidade int,fidelizado boolean default false

#fidelizados
insert into cliente values (1,'83910582712','GABRIELA PUGLIESI', '8190000101',0,true);
insert into cliente (cpf, nome, telefone, pontos_fidelidade, fidelizado) values ('65478932101', 'FERNANDO ALMEIDA', '8191111111', 0, true);
insert into cliente (cpf, nome, telefone, pontos_fidelidade, fidelizado) values ('12345678902', 'MARIA SILVA', '8192222222', 0, true);
insert into cliente (cpf, nome, telefone, pontos_fidelidade, fidelizado) values ('78945612303', 'CARLOS SANTOS', '8193333333', 0, true);
insert into cliente (cpf, nome, telefone, pontos_fidelidade, fidelizado) values ('98765432104', 'JULIANA PEREIRA', '8194444444', 0, true);
insert into cliente (cpf, nome, telefone, pontos_fidelidade, fidelizado) values ('45678912305', 'LUCAS OLIVEIRA', '8195555555', 0, true);


#codigo_barras char,descricao varchar,valor_unitario float,
insert into produto (codigo_barras, descricao, valor_unitario)
values
('7891234567890', 'Whey Protein 1kg', 99.99),
('1234567890123', 'Creatina em Po 300g', 49.99),
('9876543210987', 'Barras de Proteina (caixa com 12)', 29.99),
('5678901234567', 'BCAA em Capsulas 120 capsulas', 39.99),
('3210987654321', 'Glutamina em Po 200g', 59.99),
('4567890123456', 'Termogenico em Capsulas 60 capsulas', 69.99),
('9012345678901', 'Albumina 500g', 19.99),
('6543210987654', 'Barra de Proteina Vegana (unidade)', 2.99),
('2345678901234', 'Multivitaminico em Capsulas 60 capsulas', 24.99),
('7890123456789', 'Cafeina em Capsulas 100 capsulas', 14.99),
('3456789012345', 'Farinha de Aveia 500g', 9.99),
('0123456789012', 'Capsulas de Oleo de Peixe (Omega-3) 120 capsulas', 34.99),
('5678901234568', 'Manteiga de Amendoim 500g', 12.99),
('0987654321098', 'Shaker para Suplementos', 5.99),
('4321098765432', 'Caseina em Po 1kg', 79.99),
('7890123456790', 'Glucosamina e Condroitina em Capsulas 60 capsulas', 29.99),
('2345678901235', 'Capsulas de Maca Peruana 120 capsulas', 39.99),
('9012345678902', 'Mix de Castanhas e Frutas Secas 250g', 15.99), -- Alterado
('3456789012346', 'Suplemento de Vitamina D3 60 capsulas', 19.99), -- Alterado
('0123456789013', 'Pasta de Amendoim Integral 500g', 8.99), -- Alterado
('6789012345678', 'Barra de Proteina Vegana (caixa com 6)', 15.99),
('2109876543210', 'Cafeina Liquida 250ml', 7.99),
('5432109876543', 'Mix de Proteinas (Whey, Caseina, Albumina) 1kg', 89.99),
('8765432109876', 'Farinha de Banana Verde 500g', 11.99),
('1098765432109', 'Capsulas de Colageno 120 capsulas', 29.99),
('3210987654322', 'Hipercalorico 1kg', 49.99), -- Alterado
('6543210987655', 'Suplemento de Magnesio 60 capsulas', 17.99), -- Alterado
('9876543210988', 'Mix de Chia e Linhaca 200g', 6.99), -- Alterado
('8901234567891', 'Capsulas de Cranberry 60 capsulas', 21.99), -- Alterado
('5678901234569', 'Acai em Po 200g', 14.99), -- Alterado
('0123456789014', 'Barra de Cereal (unidade)', 1.99), -- Alterado
('7890123456791', 'Suplemento de Melatonina 60 capsulas', 24.99), -- Alterado
('2345678901236', 'Pasta de Amendoim com Chocolate 500g', 10.99), -- Alterado
('9012345678903', 'Pasta de Amendoim com Coco 500g', 10.99), -- Alterado
('3456789012347', 'Mix de Proteinas (Whey, Caseina) 1kg', 79.99), -- Alterado
('0123456789015', 'Suplemento de Calcio 120 capsulas', 15.99), -- Alterado
('6789012345679', 'Cha Verde em Capsulas 120 capsulas', 12.99), -- Alterado
('2109876543211', 'Barra de Proteina com Castanhas (unidade)', 3.99), -- Alterado
('5432109876544', 'Suplemento de Zinco 60 capsulas', 13.99), -- Alterado
('8765432109877', 'Capsulas de Spirulina 120 capsulas', 19.99), -- Alterado
('1098765432110', 'Oleo de Coco Extra Virgem 500ml', 19.99), -- Alterado
('3210987654323', 'Maltodextrina 1kg', 19.99), -- Alterado
('6543210987656', 'Suplemento de Ferro 60 capsulas', 11.99), -- Alterado
('9876543210989', 'Barras de Cereal com Proteina (caixa com 6)', 19.99), -- Alterado
('8901234567892', 'Capsulas de Vitamina C 120 capsulas', 9.99), -- Alterado
('5678901234570', 'Mix de Frutas Secas 200g', 7.99), -- Alterado
('0123456789016', 'Barra de Proteina com Chocolate (unidade)', 2.99); -- Alterado


#id_cliente int,id_loja int,
-- Fidelizados
insert into cliente_loja (id_cliente, id_loja) values (1, 1);
insert into cliente_loja (id_cliente, id_loja) values (1, 2);
insert into cliente_loja (id_cliente, id_loja) values (2, 2);
insert into cliente_loja (id_cliente, id_loja) values (3, 2);
insert into cliente_loja (id_cliente, id_loja) values (4, 3);
insert into cliente_loja (id_cliente, id_loja) values (5, 1);

-- Anônimos
insert into cliente_loja (id_cliente, id_loja) values (6, 1);
insert into cliente_loja (id_cliente, id_loja) values (5, 2);
insert into cliente_loja (id_cliente, id_loja) values (2, 3);


#id_loja int,codigo_produto char,quantidade int default '0'
-- Loja 1
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '7891234567890', 10);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '1234567890123', 20);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '9876543210987', 15);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '5678901234567', 25);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '3210987654321', 12);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '9012345678901', 15);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '6543210987654', 28);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '2345678901234', 18);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '7890123456789', 30);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '3456789012345', 25);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '2109876543210', 20);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '5432109876543', 10);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '8765432109876', 12);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '1098765432109', 15);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (1, '3210987654322', 8); -- Alterado

-- Loja 2
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '4567890123456', 30);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '9012345678901', 18);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '6543210987654', 40);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '2345678901234', 22);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '7890123456789', 35);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '3456789012345', 20);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '0123456789012', 10);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '6789012345678', 25);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '2109876543210', 18);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '5432109876543', 30);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '8765432109876', 22);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '1098765432109', 14);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '3210987654322', 16); -- Alterado
insert into produto_loja (id_loja, codigo_produto, quantidade) values (2, '6543210987655', 20); -- Alterado

-- Loja 3
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '0123456789013', 50); -- Alterado
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '5678901234567', 28);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '1098765432109', 10);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '3210987654322', 20); -- Alterado
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '6543210987654', 15);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '6789012345678', 30);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '2109876543210', 25);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '5432109876543', 18);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '8765432109876', 10);
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '1098765432110', 20); -- Alterado
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '3210987654323', 22); -- Alterado
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '6543210987656', 15); -- Alterado
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '9876543210988', 25); -- Alterado
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '8901234567891', 18); -- Alterado
insert into produto_loja (id_loja, codigo_produto, quantidade) values (3, '5678901234569', 30); -- Alterado



#id_funcionario int ,id_loja int,
-- Loja 1
insert into funcionario_loja (id_funcionario, id_loja) values (1, 1);
insert into funcionario_loja (id_funcionario, id_loja) values (4, 1);
insert into funcionario_loja (id_funcionario, id_loja) values (6, 1);
insert into funcionario_loja (id_funcionario, id_loja) values (7, 1);
insert into funcionario_loja (id_funcionario, id_loja) values (9, 1);
insert into funcionario_loja (id_funcionario, id_loja) values (12, 1);
insert into funcionario_loja (id_funcionario, id_loja) values (13, 1);
insert into funcionario_loja (id_funcionario, id_loja) values (14, 1);
insert into funcionario_loja (id_funcionario, id_loja) values (15, 1);

-- Loja 2
insert into funcionario_loja (id_funcionario, id_loja) values (2, 2);
insert into funcionario_loja (id_funcionario, id_loja) values (5, 2);
insert into funcionario_loja (id_funcionario, id_loja) values (8, 2);
insert into funcionario_loja (id_funcionario, id_loja) values (11, 2);
insert into funcionario_loja (id_funcionario, id_loja) values (17, 2);
insert into funcionario_loja (id_funcionario, id_loja) values (18, 2);
insert into funcionario_loja (id_funcionario, id_loja) values (19, 2);
insert into funcionario_loja (id_funcionario, id_loja) values (20, 2);

-- Loja 3
insert into funcionario_loja (id_funcionario, id_loja) values (3, 3);
insert into funcionario_loja (id_funcionario, id_loja) values (10, 3);
insert into funcionario_loja (id_funcionario, id_loja) values (21, 3);
insert into funcionario_loja (id_funcionario, id_loja) values (22, 3);
insert into funcionario_loja (id_funcionario, id_loja) values (23, 3);
insert into funcionario_loja (id_funcionario, id_loja) values (24, 3);

#teste triggers

insert into produto (codigo_barras, descricao, valor_unitario) values ('9999999999999', 'Whey Protein 1kg', 99.99);

update produto set valor_unitario = 49.99 where codigo_barras = '9999999999999';

delete from produto where codigo_barras = '9999999999999';
insert into pedido values();
#insere pedido
insert into pedido(id_pedido, valor_total) values (123, 55.50);



#insere pedido_produto 1098765432110
insert into pedido_produto values ('4567890123456',123,2);
insert into pedido_produto values ('1098765432110',123,2);


#teste cria pedido e atualiza preço
#cria pedido inicial
insert into pedido values();
#como pego depois?

#insert into pedido_produto values ('4567890123456',123,2);



#insert into pedido(id_pedido, valor_total) values (555, 55.50);

#insere pedido_produto
#insert into pedido_produto values ('4567890123456',555,2);
