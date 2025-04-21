function breakingRecords(scores: number[]): number[] {
  const records = [0, 0];
  let min = scores[0];
  let max = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < min) {
      min = scores[i];
      records[1]++;
    } else if (scores[i] > max) {
      max = scores[i];
      records[0]++;
    }
  }

  return records;
}
