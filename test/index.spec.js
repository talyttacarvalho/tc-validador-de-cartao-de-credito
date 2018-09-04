const assert = require('assert');
const cardValidator = require('../index.js');

describe('cardValidator()', function() {
  it('validar cartão com dígitos corretos, deve retornar true', () => {
    assert.equal(cardValidator('36490102462661'), true);
  });

  it('validar cartão com dígito incorreto, deve retornar false', () => {
    assert.equal(cardValidator('36490102462669'), false);
  });

  it('validar campo em branco, deve retornar erro "Número do cartão não inserido."', () => {
    assert.equal(cardValidator(''), 'Número do cartão não inserido.');
  });

  it('validar número incompleto, deve retornar false.', () => {
    assert.equal(cardValidator('3649010'), false);
  });

  it('validar letras inseridas no campo, deve retornar Cartão com dígitos inválidos (letras).', () => {
    assert.equal(cardValidator('36A9O1OZA6Z669'), 'Cartão com dígitos inválidos (letras).');
  });
});
