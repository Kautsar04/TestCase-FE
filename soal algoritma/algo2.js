const longestWord = (str) => {
  const words = str.split(' ');
  let longest = '';
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return `${longest}: ${longest.length} Character`;
}

const data = "Saya sangat senang mengerjakan soal algoritma"
console.log(longestWord(data))