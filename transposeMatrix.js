function transpose(matrix) {
  const result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    const current = Array(matrix.length).fill(0);
    result.push(current);
    for (let j = 0; j < matrix.length; j++) {
      result[i][j] = matrix[j][i];
    }
  }
  return result;
}
