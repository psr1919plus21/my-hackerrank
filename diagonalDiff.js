let data = [
    [1, 2, 4],
    [4, 6, 1],
    [5, 7, 1]
]
console.log(diagonalDifference(data));

function diagonalDifference(data) {
  let mainDiagonalSum = 0;
  let asideDiagonalSum = 0;
  let mainDiagonalPointer = 0;
  let asideDiagonalPointer = data.length - 1;

  data.forEach(function(row) {
    mainDiagonalSum += row[mainDiagonalPointer];
    mainDiagonalPointer++;

    asideDiagonalSum += row[asideDiagonalPointer];
    asideDiagonalPointer--;
  });

  return Math.abs(mainDiagonalSum - asideDiagonalSum);
}