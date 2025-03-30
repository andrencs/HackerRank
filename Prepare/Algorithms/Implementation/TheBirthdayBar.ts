function birthday(s: number[], d: number, m: number): number {
  console.log(s);

  if (s.length < m) return 0;
  if (s.reduce((acc, cur) => (acc += cur), 0) < d) return 0;

  let possibilities = 0;

  let i = 0;
  let j = m - 1;
  let sum = s.slice(i, j + 1).reduce((acc, cur) => (acc += cur), 0);

  for (; j < s.length; i++, j++) {
    if (sum == d) possibilities++;

    sum -= s[i];
    sum += s[j + 1];
  }

  return possibilities;
}
