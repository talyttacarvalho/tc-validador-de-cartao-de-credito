# Validador de Cartão de de Crédito

**Esta biblioteca tem a finalidade de realizar a validação de cartões (crédito ou débito) com o uso do Algoritmo de Luhn, em aplicações web.** Ao realizar a validação, deverá retornar true ou false de acordo com o caso.

## Os métodos utilizados na biblioteca são:

### cardValidator(numCard);

Exemplo de uso:

```
$node
let validator = require("tc-card-validator")
validator.cardValidator(36490102462661)
//"true"
```

## Versão 1.0.2

* Funcionalidades: validação de cartão (crédito ou débito);
* No caso de o cartão ser válido retorna true, sendo inválido, retorna false.

## Instalação

* É necessário ter o node + npm já instalados em sua máquina. Para guia de instação visite o [site oficial].

* Proceda a instação utilizando

```
$npm install tc-card-validator
```

## Roadmap oficial do projeto

### versão 2.2.1 (sem previsão)

* Implementação de reconhecimento e apresentação da bandeira do cartão inserido.

### versão 1.2.1 (previsão dezembro/2018)

* Implementação de inserção automática de "." e "-" entre os números.

### versão 1.1.1 (previsão novembro/2018)

* Implementação de correção automática quando for inserido espaçamento pelo usuário;
* correção de eventuais ocorrência de bugs.

### versão 1.0.2 (released)

* Atualização do Readme
* Correção de BUG.

### versão 1.0.0 (released)

* Funcionalidades: validação de cartão (crédito ou débito);
* No caso de o cartão ser válido retorna true, sendo inválido, retorna false.
