function sockMerchant(n: number, ar: number[]): number {
  const socks: { [k: string]: number } = {};

  ar.forEach((item) => {
    if (socks[String(item)]) {
      socks[String(item)]++;
    } else {
      socks[String(item)] = 1;
    }
  });

  let pairs: number = 0;
  for (const [key, value] of Object.entries(socks)) {
    pairs += Math.floor(value / 2);
  }

  return pairs;
}
