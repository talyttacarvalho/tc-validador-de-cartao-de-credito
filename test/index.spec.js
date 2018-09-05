const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

const cardValidator = require("../index.js");

describe("cardValidator()", function () {
  describe("Validar cartão com dígitos corretos.", function () {
    it("Deve retornar true", () => {
      assert.equal(cardValidator("36490102462661"), true);
    });
  });

  describe("Validar cartão com dígito incorreto.", function () {
    it("Deve retornar false", () => {
      assert.equal(cardValidator("36490102462669"), false);
    });
  });

  describe("Validar número incompleto.", function () {
    it("Deve retornar false.", () => {
      assert.equal(cardValidator("3649010"), false);
    });
  });

  describe("Quando não hover parâmetro.", function () {
    it('Deve retornar erro "Número do cartão não inserido."', () => {
      let emptyPar = () => {cardValidator("")};
      expect(emptyPar).to.throw("Número do cartão não inserido.");
    });
  });

  describe("Validar letras inseridas no campo.", function () {
    it('Deve retornar "Cartão com dígitos inválidos (letras)."', () => {
      let errorPar = () => {cardValidator("36A9O1OZA6Z669")};
      expect(errorPar).to.throw("Cartão com dígitos inválidos (letras).");
    });
  });
});
