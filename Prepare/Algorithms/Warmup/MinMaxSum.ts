function miniMaxSum(arr: number[]): void {
  arr.sort((a, b) => a - b);

  let min = arr.slice(0, 4).reduce((acc, cur) => (acc += cur), 0);
  let max = arr.slice(-4).reduce((acc, cur) => (acc += cur), 0);

  console.log(min, max);
}
