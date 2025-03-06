function fibonacciModified(t1: number, t2: number, n: number): bigint {
  const memory = [BigInt(t1), BigInt(t2)];

  if (n == 1 || n == 2) return memory[n - 1];

  for (let i = 3; i <= n; i++) {
    const calc = memory[0] + memory[1] ** BigInt(2);

    memory[0] = memory[1];
    memory[1] = calc;
  }

  return memory[1];
}
