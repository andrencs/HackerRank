function commonChild(s1: string, s2: string): number {
  const n: number = s1.length;
  const m: number = s2.length;

  let prev: number[] = Array(m + 1).fill(0);
  let curr: number[] = Array(m + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        curr[j] = prev[j - 1] + 1;
      } else {
        curr[j] = Math.max(prev[j], curr[j - 1]);
      }
    }
    [prev, curr] = [curr, prev];
  }

  return prev[m];
}
