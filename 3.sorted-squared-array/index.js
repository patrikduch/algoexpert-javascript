function sortedSquaredArray(array) {
  let lPtr = 0;
  let rPtr = array.length - 1;

  let resultArray = [array.length];

  for (let i = array.length - 1; i >= 0; i--) {
    const left = Math.abs(array[lPtr]);
    const right = Math.abs(array[rPtr]);

    if (left > right) {
      resultArray[i] = Math.pow(left, 2);
      lPtr++;
    } else {
      resultArray[i] = Math.pow(right, 2);
      rPtr--;
    }
  }

  return resultArray;
}
