function getChange(amount: number) {
  const counting = <Record<string, number>>{
    1000: 0,
    500: 0,
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
  };

  if (amount % 10 !== 0 || amount < 0) {
    throw Error("Not valid number.");
  }

  const values = Object.keys(counting)
    .map((value) => Number(value))
    .sort((a: number, b: number) => b - a);

  values.forEach((key) => {
    counting[String(key)] = Math.trunc(amount / key);
    amount = amount % key;
  });

  return Object.fromEntries(
    Object.entries(counting).filter(([key, value]) => {
      return value > 0;
    }),
  );
}

console.log(getChange(1880)); // { 1000: 1, 500: 1, 200: 1, 100: 1, 50: 1, 20: 1, 10: 1 }
console.log(getChange(60)); // { 50: 1, 10: 1 }
console.log(getChange(3000)); // { 1000: 3 }
console.log(getChange(0)); // {}
console.log(getChange(15)); // Error
