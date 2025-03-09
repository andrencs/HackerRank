function designerPdfViewer(h: number[], word: string): number {
  let highest = -1;

  for (let i = 0; i < word.length; i++) {
    const cd = word.charCodeAt(i) - 97;

    if (h[cd] > highest) {
      highest = h[cd];
    }
  }

  return word.length * highest;
}
