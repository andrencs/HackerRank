function viralAdvertising(n: number): number {
  let people = 5;
  let liked = 0;

  for (let i = 1; i <= n; i++) {
    liked += Math.floor(people / 2);
    people = Math.floor(people / 2) * 3;
  }

  return liked;
}
