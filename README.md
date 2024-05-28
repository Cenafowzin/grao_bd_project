# GRÃO - Projeto de Banco de Dados
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=flat-square)
<br>Atividade avaliativa da disciplina de Banco de Dados.

Utilizando a linguagem de programação JAVA, juntamente com SQL e React, desenvolveremos uma solução simples de gerenciamento de produtos de uma pequena rede de lojas de produtos alimentíceos do ramo fitness, onde será possível cadastrar produtos, realizar vendas e ainda juntar pontos de fidelidade, entre outras funções.

# MINI MUNDO

Uma rede de lojas possui funcionários, que podem ser vendedores ou estoquistas. Cada loja tem um número identificador, endereço (número, rua, bairro e cidade) e telefone. Quanto aos funcionários, cada loja possui vendedores e estoquistas, onde eles são supervisionados por um gerente, que também é um vendedor ou estoquista. Dos funcionários, são cadastrados a matrícula, nome, CPF, telefone(s), e-mail, endereço (rua, número, bairro e cidade) e salário. Quando chega um produto novo, que não era vendido antes na loja, ele tem seu código de barras, descrição e preço cadastrados. Esses produtos são vinculados à cada loja, de modo a fazer parte do estoque individual de cada loja, podendo ser verificado a quantidade do produto existente. Os clientes que frequentam a loja têm a opção de participar do programa de fidelidade, onde cada real gasto e acumulado e pode virar prêmios ou descontos. Para se fidelizar, o cliente precisa cadastrar o seu CPF, nome e telefone, e ficará registrado os seus pontos e se ele está ativo ou não, uma vez que ele pode deixar de ser fidelizado a qualquer momento. Quando um cliente realiza uma compra, independentemente de ser fidelizado ou não, é gerado um número identificador para registro interno dessa venda. Caso o cliente seja fidelizado, esse número é pessoal do cliente, caso contrário, é um número aleatório. Para a compra ser feita, é gerado um número identificador do pedido, onde nele são adicionados o código de barras do produto, a quantidade desse produto e a hora do pedido. Cada pedido pode ter diversos produtos, e nele consta o valor total de todos os produtos somados. A venda ocorre quando o cliente leva o pedido para o funcionário registrar a compra, onde os pontos da venda, que são equivalentes a cada real do pedido, são somados aos pontos de fidelidade do que o cliente tinha anteriormente. Para controle interno, cada funcionário, venda, produto e pedido são guardados em forma de backup. Toda operação, seja de inserção, remoção ou atualização desses dados, são registrados, juntamente com a data e hora da modificação, e o tipo da operação.

# Instruções para abrir o projeto, onde serão necessários o VSCode, DBeaver e o IntelliJ:

# 1.
Escolha um diretório no seu computador, crie uma pasta e abra o git bash nela. 
<br>Então digite:
<br>"git clone https://github.com/Cenafowzin/grao_bd_project/"

# 2.
Após a criação da pasta, procure a pasta "Scripts", e rode o arquivo "criacao_grao.sql" com o DBeaver para criar as tabelas.

# 3.
Em seguida, faça o mesmo com o arquivo "Script.sql" que se encontra na mesma pasta para alimentar as tabelas

# 4.
Após a criação da pasta, abra o IntelliJ, siga o seguinte caminho:
<br>grao_emporio_db/src/main/resources/application.properties

# 5.
Neste arquivo, onde tem "spring.datasource.password", coloque a senha do sql da sua máquina.
<br>Em seguida clique em "Run 'GraoApplication'"

# 6.
Agora no VSCode, abra o seguinte caminho:
<br>grao/grao_bd_project/grao-front 

# 7.
No terminal, digite "npm start"

# 8.1.
O VSCode abrirá uma aba no seu navegador padrão e então você poderá mexer no nosso projeto.

# 8.2.
Caso não inicie e mostrar a seguinte mensagem:

"npm start
<br><br>> grao-front@0.1.0 start
<br>> react-scripts start   

'react-scripts' não é reconhecido como um comando interno
ou externo, um programa operável ou um arquivo em lotes. "

Nesse caso, digite no terminal:
<br>"npm install react-scripts"

Agora aguarde a instalação do React.

# 8.3.
Após a instalação, digite novamente "npm start" e aguarde. <br>O VSCode abrirá uma aba no seu navegador padrão e então você poderá utilizar nosso projeto.

# 9
Todas as alterações no site poderão ser vistas no banco de dados por meio do DBeaver

# INSTRUÇÕES PARA LOGIN
Para fazer o login inicial, é necessário um e-mail e senha de funcionário. Todos os e-mails dos funcionários podem ser visualizados pelo DBeaver após alimentação da planilha.<br>Disponibilizo aqui o e-mail de um funcionário-gerente para uso:
<br>E-mail: rcarlos@gmail.com
<br>Senha: 1234
