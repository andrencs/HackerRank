function hurdleRace(k: number, height: number[]): number {
  const sorted = height.sort((a, b) => b - a);

  return k > sorted[0] ? 0 : sorted[0] - k;
}
