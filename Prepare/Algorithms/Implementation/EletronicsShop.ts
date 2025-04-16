function getMoneySpent(
  keyboards: number[],
  drives: number[],
  b: number
): number {
  let highest = -1;

  for (let k = 0; k < keyboards.length; k++) {
    for (let d = 0; d < drives.length; d++) {
      let cost = keyboards[k] + drives[d];
      if (cost <= b && cost > highest) {
        highest = cost;
      }
    }
  }

  return highest;
}
