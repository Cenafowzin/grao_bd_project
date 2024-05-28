# GRÃO - Projeto de Banco de Dados
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=flat-square)
<br>Atividade avaliativa da disciplina de Banco de Dados.

Utilizando a linguagem de programação JAVA, juntamente com SQL e React, desenvolveremos uma solução simples de gerenciamento de produtos de uma pequena rede de lojas de produtos alimentíceos do ramo fitness, onde será possível cadastrar produtos, realizar vendas e ainda juntar pontos de fidelidade, entre outras funções.


Instruções para abrir o projeto, onde serão necessários o VSCode, DBeaver e o IntelliJ:

# 1.
Escolha um diretório no seu computador, crie uma pasta e abra o git bash nela. 
<br>Então digite:
<br>"git clone https://github.com/Cenafowzin/grao_bd_project/"

# 2.
Após a criação da pasta, procure a pasta "Scripts", e rode o arquivo Script.sql com o DBeaver para criar as tabelas.

# 3.
Em seguida, faça o mesmo com o arquivo "criacao_grao.sql" que se encontra na mesma pasta para alimentar as tabelas

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
