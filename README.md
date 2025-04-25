# Looksy

Projeto Looksy — Configuração e execução do ambiente.

## Pré-requisitos

- Node.js
- MySQL
- Git

## Clonando o repositório

```bash
git clone https://github.com/Wkyouma/Looksy
cd looksy
```

## Configuração do banco de dados

1-Acesse o MySQL:
```bash

mysql -u root -p

```

2-Crie o banco de dados:


```bash
CREATE DATABASE Looksy;
SHOW DATABASES;
EXIT;

```

3-Importe o arquivo .sql para preencher o banco:

```bash

mysql -u root -p Looksy < caminho/para/looksy.sql


```

## Inicializando o Front-end

```bash
cd front
npm install
npm run dev
```

## Inicializando o Back-end

```bash
cd ../server
npm install 
```

Configure as credenciais do banco de dados no back-end:

Abra o arquivo de configuração (por exemplo: .env ou config.js, dependendo da implementação).

Altere os dados de conexão (usuário, senha, banco de dados, host) conforme seu ambiente local.

Inicie o servidor:

```bash

npm start


```
