// write a function to check if a number a positive even number 
// if yes , return true. Otherwise return false

// flag

function isPositiveEvenNumber(n) {
  let isValid;
  // checking
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
}

 //version 2

 function isPositiveEvenNumber(n) {
  let isValid = false;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }
  return isValid;
 }

 //version 3

 function isPositiveEvenNumber (n) {
  if (n > 0 && n % 2 === 0) {
    return true
  }
  return false;
 }


 //version 4

  function isPositiveEvenNumber (n) {
    return n > 0  && n % 2 === 0
  }

  console.log(isPositiveEvenNumber(7));