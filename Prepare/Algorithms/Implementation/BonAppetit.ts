function bonAppetit(bill: number[], k: number, b: number): void {
  bill[k] = 0;
  const annaBill = bill.reduce((acc, cur) => (acc += cur), 0) / 2;

  if (b == annaBill) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annaBill);
  }
}
