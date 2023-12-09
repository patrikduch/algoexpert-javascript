function twoNumberSum(array, targetSum) {
  let dict = {};

  for (let i = 0; i < array.length; i++) {
    const potentialMatch = targetSum - array[i];

    if (dict[potentialMatch]) {
      return [potentialMatch, array[i]];
    }

    dict[array[i]] = true;
  }

  return [];
}
