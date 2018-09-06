function cardValidator(numCard) {
  isValid(numCard);
  let arrayNumCard = beNumber(numCard);
  return applyAlgorithm(arrayNumCard);
}

function isValid(numCard) {
  if (!numCard) {
    throw new Error("Número do cartão não inserido.");
  }
  for (let num of numCard) {
    if (num.charCodeAt() < 48 || num.charCodeAt() > 57) {
      throw new Error("Cartão com dígitos inválidos (letras).");
    }
  }
}

function beNumber(numCard) {
  let numString = numCard.split("");
  numString.reverse();

  let conjNum = [];
  for (let i in numString) {
    conjNum.push(parseInt(numString[i]));
  }
  return conjNum;
}

function applyAlgorithm(arrayNumCard) {
  for (let i = 1; i < arrayNumCard.length; i = i + 2) {
    if ((arrayNumCard[i] * 2) > 9) {
      arrayNumCard[i] = (parseInt((arrayNumCard[i] * 2) / 10)) + ((arrayNumCard[i] * 2) % 10);
    } else {
      arrayNumCard[i] = arrayNumCard[i] * 2;
    }
  }

  let sum = 0;
  for (let i = 0; i < arrayNumCard.length; i++) {
    sum = sum + arrayNumCard[i];
  }

  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports.cardValidator = cardValidator;
