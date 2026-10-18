const reverseString = (string) => {
  const reversed = [];

  for (let i = string.split("").length - 1; i >= 0; i--) {
    reversed.push(string.split("")[i]);
  }

  return reversed.join("");
};

console.log(reverseString("hola")); // "aloh"
console.log(reverseString("a")); // "a"
console.log(reverseString("")); // ""
