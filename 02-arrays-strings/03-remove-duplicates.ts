function removeDuplicatesLoop<T>(items: T[]): T[] {
  const withoutDuplicates: T[] = [];

  for (let i = 0; i < items.length; i++) {
    if (!withoutDuplicates.includes(items[i])) {
      withoutDuplicates.push(items[i]);
    }
  }

  return withoutDuplicates;
}

console.log(removeDuplicatesLoop([1, 2, 2, 3, 1, 4])); // [1, 2, 3, 4]
console.log(removeDuplicatesLoop(["a", "b", "a"])); // ["a", "b"]
console.log(removeDuplicatesLoop([5, 5, 5])); // [5]
console.log(removeDuplicatesLoop([])); // []

function removeDuplicatesReduce<T>(items: T[]): T[] {
  return items.reduce<T[]>((accumulator, currentItem) => {
    if (!accumulator.includes(currentItem)) {
      accumulator.push(currentItem);
    }
    return accumulator;
  }, []);
}

console.log(removeDuplicatesReduce([1, 2, 2, 3, 1, 4])); // [1, 2, 3, 4]
console.log(removeDuplicatesReduce(["a", "b", "a"])); // ["a", "b"]
console.log(removeDuplicatesReduce([5, 5, 5])); // [5]
console.log(removeDuplicatesReduce([])); // []
