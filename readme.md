# CRUD SIMPLES DE USUÁRIOS

## Banco de dados
Copie o sql abaixo para o seu banco de dados:


<code>
create database teste 

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

</code>


## Instale as dependências
`npm install`

## Para executar o projeto
`npm start`