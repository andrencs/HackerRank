function catAndMouse(x: number, y: number, z: number): string {
  const d = [Math.abs(x - z), Math.abs(y - z)];

  if (d[0] < d[1]) {
    return "Cat A";
  } else if (d[1] < d[0]) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}
