function migratoryBirds(arr: number[]): number {
  const birds = new Map();

  arr.sort((a, b) => a - b);

  let max = 0;

  arr.forEach((bird) => {
    const seen = (birds.get(bird) || 0) + 1;
    birds.set(bird, seen);

    if (seen > max) max = seen;
  });

  const filtered = [...birds].filter((a) => a[1] == max);

  return filtered[0][0];
}
