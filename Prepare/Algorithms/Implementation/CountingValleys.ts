function countingValleys(steps: number, path: string): number {
  let qtd = 0;
  let level = 0;
  path.split("").forEach((step) => {
    if (level == -1 && step == "U") qtd++;
    level += step == "D" ? -1 : 1;
  });

  return qtd;
}
