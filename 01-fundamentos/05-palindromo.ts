const isPalindrome = (inputText: string) => {
  let normalizeText = normalizer(inputText).split(" ").join("").toUpperCase();

  for (let i = 0; i < normalizeText.length; i++) {
    if (normalizeText[i] !== normalizeText[normalizeText.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("Anita lava la tina")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Hola")); // false
console.log(isPalindrome("")); // true

function normalizer(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[,:;]/g, "");
}
