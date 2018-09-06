const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const lib = require("../index.js");

describe("cardValidator()", function () {
  describe("Validar cartão com dígitos corretos.", function () {
    it("Deve retornar true", () => {
      assert.equal(lib.cardValidator(36490102462661), true);
    });
  });

  describe("Validar cartão com dígito incorreto.", function () {
    it("Deve retornar false", () => {
      assert.equal(lib.cardValidator(36490102462669), false);
    });
  });

  describe("Validar cartão como string.", function () {
    it("Deve retornar false", () => {
      let stringPar = () => {lib.cardValidator("36A9O1OZA6Z669")};
      expect(stringPar).to.throw("Número do cartão não pode ser string.");
    });
  });

  describe("Validar número incompleto.", function () {
    it("Deve retornar false.", () => {
      assert.equal(lib.cardValidator(3649010), false);
    });
  });

  describe("Quando não hover parâmetro.", function () {
    it('Deve retornar erro "Número do cartão não inserido."', () => {
      let emptyPar = () => {lib.cardValidator("")};
      expect(emptyPar).to.throw("Número do cartão não inserido.");
    });
  });

  describe("Validar caracteres inseridos no campo.", function () {
    it('Deve retornar "Cartão com dígitos inválidos."', () => {
      let errorPar = () => {lib.cardValidator(3649/01024-62661)};
      expect(errorPar).to.throw("Cartão com dígitos inválidos.");
    });
  });
});
