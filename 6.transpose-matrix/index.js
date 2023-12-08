function transposeMatrix(matrix) {
  const cols = matrix[0].length;
  const rows = matrix.length;

  const transposed = [];

  for (let i = 0; i < cols; i++) {
    transposed[i] = [];

    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }

  return transposed;
}

const test = transposeMatrix([
  [1, 2],
  [5, 6],
]);

console.log(test);
