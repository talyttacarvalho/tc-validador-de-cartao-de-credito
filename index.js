function cardValidator(numCard) {
  try {
    if (isValid(numCard)) {
      numCard = beNumber(numCard);
      return applyAlgorithm(numCard);
    }
  } catch (error) {
    return error.message;
  }
}

function isValid(numCard) {
  if (!numCard) {
    throw new Error("Número do cartão não inserido.");
  }
  for (num of numCard) {
    if (num.charCodeAt() < 48 || num.charCodeAt() > 57) {
      throw new Error("Cartão com dígitos inválidos (letras).");
    }
  }
  return true;
}

function beNumber(numCard) {

  let numString = numCard.split('');
  numString.reverse();

  let conjNum = [];
  for (let i in numString) {
    conjNum.push(parseInt(numString[i]));
  }
  return conjNum;
}

function applyAlgorithm(numCard) {
  for (let i = 1; i < numCard.length; i = i + 2) {
    if ((numCard[i] * 2) > 9) {
      numCard[i] = (parseInt((numCard[i] * 2) / 10)) + ((numCard[i] * 2) % 10);
    } else {
      numCard[i] = numCard[i] * 2;
    }
  }

  let sum = 0
  for (let i = 0; i < numCard.length; i++) {
    sum = sum + numCard[i];
  }

  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = cardValidator;
