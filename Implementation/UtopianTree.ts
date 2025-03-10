function utopianTree(n: number): number {
  let height = 1;

  for (let i = 1; i <= n; i++) {
    if (i % 2) {
      height *= 2;
    } else {
      height++;
    }
  }

  return height;
}
