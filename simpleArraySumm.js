let array = [1, 2, 3];

console.log(simpleArraySum(array));

function simpleArraySum(data) {
  return data.reduce(function(acc, item) {
    return acc + item;
  }, 0);
}