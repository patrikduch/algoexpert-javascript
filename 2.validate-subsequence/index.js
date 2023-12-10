function isValidSubsequence(array, sequence) {
  let pointer = 0;

  for (let i = 0; i < array.length; i++) {
    if (sequence[pointer] == array[i]) {
      pointer++;
    }
  }

  // Pointer count must be equal to number items in the subsequence
  if (pointer == sequence.length) return true;

  return false;
}
