function getMinMaxLoop(numbers: number[]) {
  if (numbers.length === 0) {
    throw Error("Invalid array");
  }

  const result: { min: number; max: number } = {
    min: numbers[0],
    max: numbers[0],
  };

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < result.min) {
      result.min = numbers[i];
    }

    if (numbers[i] > result.max) {
      result.max = numbers[i];
    }
  }
  return result;
}

console.log(getMinMaxLoop([3, 7, 1, 9, 4])); // { min: 1, max: 9 }
console.log(getMinMaxLoop([-5, -2, -9])); // { min: -9, max: -2 }
console.log(getMinMaxLoop([42])); // { min: 42, max: 42 }
console.log(getMinMaxLoop([])); // Error

function getMinMaxReduce(numbers: number[]) {
  if (numbers.length === 0) {
    throw Error("Invalid array");
  }

  return numbers.reduce(
    (accumulator, currentItem) => {
      if (accumulator.min > currentItem) {
        accumulator.min = currentItem;
      }

      if (accumulator.max < currentItem) {
        accumulator.max = currentItem;
      }

      return accumulator;
    },
    {
      min: numbers[0],
      max: numbers[0],
    },
  );
}

console.log(getMinMaxReduce([3, 7, 1, 9, 4])); // { min: 1, max: 9 }
console.log(getMinMaxReduce([-5, -2, -9])); // { min: -9, max: -2 }
console.log(getMinMaxReduce([42])); // { min: 42, max: 42 }
console.log(getMinMaxReduce([])); // Error
