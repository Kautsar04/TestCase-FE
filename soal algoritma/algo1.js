const reverseWord = (str) => {
  const word = str.replace(/[0-9]/g, '')  
  let number = str.replace(/[^0-9]/g, '') 

  let resultWord = word.split('').reverse().join('');
  return resultWord + number;
}

const input = "NEGIE1234223"
console.log(reverseWord(input))