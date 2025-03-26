function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  const nApples = apples
    .map((dist) => a + dist)
    .filter((appleDist) => s <= appleDist && appleDist <= t).length;

  const nOranges = oranges
    .map((dist) => b + dist)
    .filter((orangeDist) => s <= orangeDist && orangeDist <= t).length;

  console.log(nApples);
  console.log(nOranges);
}
