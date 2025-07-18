const diagonalMinus = (matrix) => {
  let resArr = []
  let diagonalFrmLft = 0
  let diagonalFrmRght = 0
  for (let i = 0; i < matrix.length; i++){
    countDown = matrix.length - 1 - i
    diagonalFrmLft += matrix[i][i]
    diagonalFrmRght += matrix[i][countDown]
  }
  return diagonalFrmLft - diagonalFrmRght
}

Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
console.log(diagonalMinus(Matrix))