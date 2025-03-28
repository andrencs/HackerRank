function getTotalX(a: number[], b: number[]): number {
  const nums: number[] = [];

  for (let i = a.at(-1)!; i <= b.at(0)!; i += a.at(-1)!) {
    if (a.some((num) => i % num != 0)) continue;
    if (b.some((num) => num % i != 0)) continue;
    nums.push(i);
  }

  return nums.length;
}
