const isPalindrome = (inputText: string) => {
  const normalizerText = normalizeText(inputText);

  for (let i = 0; i < normalizerText.length / 2; i++) {
    if (normalizerText[i] !== normalizerText[normalizerText.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

function normalizeText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z A-Z 0-9]/g, "")
    .split(" ")
    .join("")
    .toUpperCase();
}

console.log(isPalindrome("Anita lava la tina")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Hola")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("¿Acaso hubo búhos acá?")); // true
console.log(isPalindrome("Sé verlas al revés")); // true
