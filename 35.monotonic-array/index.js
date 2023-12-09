function isMonotonic(array) {
  let nonDecresing = true;
  let nonIncreasing = true;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      nonIncreasing = false;
    }

    if (array[i] < array[i - 1]) {
      nonDecresing = false;
    }
  }

  return nonIncreasing || nonDecresing;
}
