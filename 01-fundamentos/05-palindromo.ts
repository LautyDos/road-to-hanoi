function isPalindrome(inputText: string) {
  const normalizedText = normalizeText(inputText);

  for (let i = 0; i < normalizedText.length / 2; i++) {
    if (normalizedText[i] !== normalizedText[normalizedText.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function normalizeText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0301\u0308]/g, "") //u0301 accent and u0308 umlaut.
    .normalize("NFC")
    .replace(/[^a-zA-Z0-9ñÑ]/g, "")
    .toUpperCase();
}

console.log(isPalindrome("Anita lava la tina")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Hola")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("¿Acaso hubo búhos acá?")); // true
console.log(isPalindrome("Sé verlas al revés")); // true
console.log(isPalindrome("aña")); // true
