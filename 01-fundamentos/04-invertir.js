const reverseString = (text) => {
  const reversed = [];

  for (let i = text.length - 1; i >= 0; i--) {
    reversed.push(text[i]);
  }

  return reversed.join("");
};

console.log(reverseString("hola")); // "aloh"
console.log(reverseString("a")); // "a"
console.log(reverseString("")); // ""
