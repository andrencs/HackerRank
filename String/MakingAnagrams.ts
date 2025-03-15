function makingAnagrams(s1: string, s2: string): number {
  const string2map = (string) => {
    const res = new Map();

    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      if (res.has(char)) res.set(char, res.get(char) + 1);
      else res.set(char, 1);
    }

    return res;
  };

  const s1Mapped = string2map(s1);
  const s2Mapped = string2map(s2);

  let deletedCount = 0;

  const compare = (_s1, _s2) => {
    const it = _s1[Symbol.iterator]();

    for (const [char, count] of it) {
      if (_s2.has(char)) {
        if (count < _s2.get(char)) {
          deletedCount += _s2.get(char) - count;
          _s2.set(char, count);
        }
      } else {
        deletedCount += count;
        _s1.delete(char);
      }
    }
  };

  compare(s1Mapped, s2Mapped);

  compare(s2Mapped, s1Mapped);

  return deletedCount;
}
