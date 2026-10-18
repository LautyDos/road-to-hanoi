const isPrime = (n) => {
  if (n <= 0 || n === 1) {
    return false;
  }

  let cont = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      cont++;
    }
  }

  return cont === 2;
};

console.log(isPrime(2)); // true
console.log(isPrime(17)); // true
console.log(isPrime(21)); // false
console.log(isPrime(1)); // false
console.log(isPrime(0)); // false
console.log(isPrime(-7)); // false
