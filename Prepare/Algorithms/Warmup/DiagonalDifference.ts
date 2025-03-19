function diagonalDifference(arr: number[][]): number {
  let left2Right = 0;
  let right2left = 0;

  for (let i = 0; i < arr.length; i++) {
    left2Right += arr[i][i];
    right2left += arr[i][arr.length - 1 - i];
  }

  return Math.abs(left2Right - right2left);
}
