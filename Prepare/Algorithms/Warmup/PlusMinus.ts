function plusMinus(arr: number[]): void {
  let pos = 0,
    neg = 0,
    zeros = 0;

  arr.forEach((num) => {
    if (num > 0) pos++;
    else if (num < 0) neg++;
    else zeros++;
  });

  console.log((pos / arr.length).toPrecision(6));
  console.log((neg / arr.length).toPrecision(6));
  console.log((zeros / arr.length).toPrecision(6));
}
