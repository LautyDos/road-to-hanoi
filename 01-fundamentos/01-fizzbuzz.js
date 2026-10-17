function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}
console.log(fizzBuzz(60));
console.log(fizzBuzz(30));
console.log(fizzBuzz(15));
console.log(fizzBuzz(0));
console.log(fizzBuzz(5));
