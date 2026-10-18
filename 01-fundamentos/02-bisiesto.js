function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }

  return false;
}

console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1990));
console.log(isLeapYear(2004));
console.log(isLeapYear(2024));
console.log(isLeapYear(2028));
console.log(isLeapYear(2023));

console.log("--------------------------");

function isLeapYearOneExpresion(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

console.log(isLeapYearOneExpresion(2000));
console.log(isLeapYearOneExpresion(1900));
console.log(isLeapYearOneExpresion(1990));
console.log(isLeapYearOneExpresion(2004));
console.log(isLeapYearOneExpresion(2024));
console.log(isLeapYearOneExpresion(2028));
console.log(isLeapYearOneExpresion(2023));

console.log("--------------------------");

function isLeapYear400First(year) {
  if (year % 400 === 0) {
    return true;
  }

  if (year % 100 === 0 || year % 4 != 0) {
    return false;
  }

  if (year % 4 === 0) {
    return true;
  }
}

console.log(isLeapYear400First(2000));
console.log(isLeapYear400First(1900));
console.log(isLeapYear400First(1990));
console.log(isLeapYear400First(2004));
console.log(isLeapYear400First(2024));
console.log(isLeapYear400First(2028));
console.log(isLeapYear400First(2023));
