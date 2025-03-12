function hackerrankInString(s: string): string {
  const base = "hackerrank";

  let b = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == base[b]) {
      b++;
    }
  }

  return b < base.length ? "NO" : "YES";
}
