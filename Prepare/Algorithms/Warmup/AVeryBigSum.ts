function aVeryBigSum(ar: number[]): number {
  return ar.reduce((acc, cur) => (acc += cur), 0);
}
