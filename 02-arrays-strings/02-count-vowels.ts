function countVowelsLoop(text: string) {
  const vowels = ["a", "e", "i", "o", "u"];

  const normalizedArrayText = normalizeTextInArray(text);

  let count: number = 0;

  for (let i = 0; i < normalizedArrayText.length; i++) {
    if (vowels.includes(normalizedArrayText[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowelsLoop("Murciélago")); // 5
console.log(countVowelsLoop("Pingüino")); // 4
console.log(countVowelsLoop("AEIOU")); // 5
console.log(countVowelsLoop("rhythm")); // 0
console.log(countVowelsLoop("")); // 0

function countVowelsReduce(text: string) {
  const vowels = ["a", "e", "i", "o", "u"];

  return normalizeTextInArray(text).reduce((accumulator, currentItem) => {
    if (vowels.includes(currentItem)) {
      accumulator++;
    }
    return accumulator;
  }, 0);
}

console.log(countVowelsReduce("Murciélago")); // 5
console.log(countVowelsReduce("Pingüino")); // 4
console.log(countVowelsReduce("AEIOU")); // 5
console.log(countVowelsReduce("rhythm")); // 0
console.log(countVowelsReduce("")); // 0

function normalizeTextInArray(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\p{M}]/gu, "")
    .toLowerCase()
    .split("");
}
