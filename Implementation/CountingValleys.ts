function countingValleys(steps: number, path: string): number {
  const byStep = path.split("");

  let valleysCount = 0;
  let somador = 0;
  let isValley = false;

  byStep.forEach((step) => {
    let value = step == "U" ? 1 : -1;

    somador += value;

    if (somador === -1) isValley = true;
    if (isValley && somador == 0) {
      valleysCount++;
    }
    if (somador === 1) isValley = false;
  });

  return valleysCount;
}
