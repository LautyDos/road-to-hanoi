function rotateArrayLoop(items: number[], steps: number) {
  const rotatedArray: number[] = [];

  const netDisplacement = steps % items.length;

  for (let i = 0; i < items.length; i++) {
    rotatedArray.push(
      items[(items.length + i - netDisplacement) % items.length],
    );
  }

  return rotatedArray;
}

console.log(rotateArrayLoop([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArrayLoop([1, 2, 3], 3)); // [1, 2, 3]
console.log(rotateArrayLoop([1, 2, 3], 4)); // [3, 1, 2]
console.log(rotateArrayLoop([], 5)); // []

function rotateArrayReduce(items: number[], steps: number) {
  const netDisplacement = steps % items.length;
  return items.reduce<number[]>((accumulator, _currentItems, index) => {
    accumulator.push(
      items[(items.length + (index - netDisplacement)) % items.length],
    );
    return accumulator;
  }, []);
}

console.log(rotateArrayReduce([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArrayReduce([1, 2, 3], 3)); // [1, 2, 3]
console.log(rotateArrayReduce([1, 2, 3], 4)); // [3, 1, 2]
console.log(rotateArrayReduce([], 5)); // []
