function getChange(number: number) {
  const counting = { 1000: 0, 500: 0, 200: 0, 100: 0, 50: 0, 20: 0, 10: 0 };

  Object.keys(counting)
    .reverse()
    .forEach((key) => {
      while (number >= Number(key)) {
        if (number >= Number(key)) {
          // @ts-ignore
          counting[key]++;
        }
        number = number - Number(key);
      }
    });

  return counting;
}

console.log(getChange(1880)); // { 1000: 1, 500: 1, 200: 1, 100: 1, 50: 1, 20: 1, 10: 1 }
console.log(getChange(60)); // { 50: 1, 10: 1 }
console.log(getChange(3000)); // { 1000: 3 }
console.log(getChange(0)); // {}
console.log(getChange(15)); // Error

function cutLastDigit(entrance: number) {
  let result = entrance;
  let cont = 0;
  while (Math.trunc(result / 10) > 0) {
    result = Math.trunc(result / 10);
    cont++;
  }

  return entrance - result * 10 ** cont;
}
