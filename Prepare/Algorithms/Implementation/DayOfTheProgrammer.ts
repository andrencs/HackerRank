function dayOfProgrammer(year: number): string {
  let day: number;

  if (year === 1918) {
    day = 26;
  } else if (
    (year < 1918 && year % 4 === 0) || // Julian
    (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) // Gregorian
  ) {
    day = 12; // Leap
  } else {
    day = 13; // Regular
  }

  return `${day < 10 ? "0" + day : day}.09.${year}`;
}
