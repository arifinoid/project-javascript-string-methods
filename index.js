const word = `goodbye`;
const word2 = `nice try`;
const word3 = `trust`;
const word4 = `mistake`;
const word5 = `hearts`;

function showWord(data, start, end) {
  let result = data.substr(start, end);
  console.log(result);
  return result;
}

showWord(word, 0, 4);
showWord(word2, 0, 4);
showWord(word3, 2, 2);
showWord(word4, 3, 7);
showWord(word5, 2, 3);

const output = showWord(word, 0, 4);
const output2 = showWord(word2, 0, 4);
const output3 = showWord(word3, 2, 2);
const output4 = showWord(word4, 3, 7);
const output5 = showWord(word5, 2, 3);

function generate() {
  document.getElementById("output").innerHTML = output;
  document.getElementById("output2").innerHTML = output2;
  document.getElementById("output3").innerHTML = output3;
  document.getElementById("output4").innerHTML = output4;
  document.getElementById("output5").innerHTML = output5;
}
