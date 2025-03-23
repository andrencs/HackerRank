function timeConversion(s: string): string {
  const am_pm = s.slice(-2);
  let [hour, min, sec] = s.slice(0, 8).split(":");

  if (hour == "12" && am_pm == "AM") hour = "00";
  if (hour != "12" && am_pm == "PM") hour = String(Number(hour) + 12);

  return "".concat(hour, ":", min, ":", sec);
}
