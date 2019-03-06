const dataArray = [2, 5, 6, 3, 6, 1, 4];

console.log(birthdayCakeCandles(dataArray));

function birthdayCakeCandles(candles) {
  let blowableCandles = 0;
  const highestCandle = Math.max.apply(this, candles);

  blowableCandles = candles.filter(candle => candle === highestCandle).length;

  return blowableCandles;
}