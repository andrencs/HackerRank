function gradingStudents(grades: number[]): number[] {
  const result = grades.map((grade) => {
    if (grade < 38) return grade;
    if (grade % 5 > 2) return Math.ceil(grade / 5) * 5;

    return grade;
  });

  return result;
}
