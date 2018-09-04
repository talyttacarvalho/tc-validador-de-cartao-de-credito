# Validador de Cartão de de Crédito

**Essa biblioteca tem a finalidade de realizar a validação de cartões (crédito ou débito) com o uso do Algoritmo de Luhn, em aplicações web.** Esta versão validade cartões com no máximo 16 (dezesseis) dígitos.

## Os métodos utilizados na biblioteca são:

### cardValidator(numCard);

Exemplo de uso:

```
$node
let validator = require("tc-validador-de-cartao-de-credito")
validator.cardValidator(36490102462661);
//"true"
```

## Versão 1.0.0

* funcionalidades: validação de cartão (crédito ou débito) que contenha até 16 (dezesseis) dígitos;
* no caso de o cartão ser válido, retorna true, sendo inválido, retorna false.

## Instalação

* você deve ter o node + npm já instalados em sua máquina. Para guia de instação visite o [site oficial](https://www.npmjs.com/get-npm).

* proceda a instação utilizando

```
  > $npm install tc-validador-de-cartao-de-credito
```

## Roadmap oficial do projeto

### versão 2.2.0 (sem previsão)

* implementação de reconhecimento e apresentação da bandeira do cartão inserido.

### versão 1.2.0 (previsão dezembro/2018)

* implementação de inserção automática de "." e "-" entre os números.

### versão 1.0.1 (previsão novembro/2018)

* implementação de correção automática quando for inserido espaçamento pelo usuário.

### versão 1.0.0 (released)

* funcionalidades: validação de cartão (crédito ou débito) que contenha até 16 (dezesseis) dígitos;
* no caso de o cartão ser válido retorna true, sendo inválido, retorna false.
