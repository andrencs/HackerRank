function pickingNumbers(a: number[]): number {
  let max = 0;
  const sorted = a.sort((x, y) => x - y);

  for (let left = 0; left <= a.length; left++) {
    const sliced = sorted.slice(left);
    const filtered = sliced.filter((value, index, array) => {
      return Math.abs(array[0] - value) <= 1;
    });
    const size = filtered.length;
    max = Math.max(max, size);
  }

  return max;
}
