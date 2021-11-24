function addAllElements(array) {
  if (!Array.isArray(array)) throw "invalid input:" + array;

  let sum = 0;
  array.forEach((item) => {
    let number = Number(item);

    if (!isNaN(number)) {
      sum += number;
    }
  });
  return sum;
}

module.exports = addAllElements;
