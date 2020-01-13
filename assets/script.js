window.addEventListener('load', function() {
  var length = +prompt("Please enter a character length between 8-128.");

  if (length > 8 && length < 128) {
    var upper = confirm("Should your password include uppercase letters?");
    var lower = confirm("Should your password include lowercase letters?");
    var number = confirm("Should your password include numbers?");
    var symbols = confirm("Should your password include special characters?");

    if  ((upper != true || lower != true|| number != true || symbols != true)) {
      alert("You must select at least one character type!");
  
      upper = confirm("Should your password include uppercase letters?");
      lower = confirm("Should your password include lowercase letters?");
      number = confirm("Should your password include numbers?");
      symbols = confirm("Should your password include special characters?");
    }
  }
  else{

    length = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
    upper = confirm("Should your password include uppercase letters?");
    lower = confirm("Should your password include lowercase letters?");
    number = confirm("Should your password include numbers?");
    symbols = confirm("Should your password include special characters?");
  } 
  
  const resultEl = document.getElementById('password');

 

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  };
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{
    lower
  }, {
    upper
  }, {
    number
  }, {
    symbol
  }].filter(item => Object.values(item)[0]);

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}
});

  