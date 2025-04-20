function beautifulDays(i: number, j: number, k: number): number {
  let qtd = 0;

  for (let _i = i; _i <= j; _i++) {
    const reverse = Number(String(_i).split("").reverse().join(""));
    if (Math.abs(_i - reverse) % k == 0) qtd++;
  }

  return qtd;
}
