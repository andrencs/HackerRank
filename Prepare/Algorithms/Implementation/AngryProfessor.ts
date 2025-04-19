function angryProfessor(k: number, a: number[]): string {
  return a.filter((s) => s <= 0).length >= k ? "NO" : "YES";
}
