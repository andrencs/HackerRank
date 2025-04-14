function pageCount(n: number, p: number): number {
  const actualPages = n % 2 == 0 ? n + 1 : n;

  if (p < actualPages / 2) {
    return Math.floor(p / 2);
  } else {
    return Math.floor((actualPages - p) / 2);
  }
}
