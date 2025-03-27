function getTotalX(a: number[], b: number[]): number {
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];

  const lcmFn = (arr: number[]): number => {
    console.log("lcm", arr);

    if (arr.length == 1) return arr[0];
    if (arr.every((item) => item == 1)) return 1;

    const nums: number[] = [];

    let _arr = arr.filter((n: number) => n != 1);
    _arr.sort((a: number, b: number) => a - b);

    do {
      console.log("_arr", _arr);
      let factor = 0;

      for (let i = 0; i < primes.length; i++) {
        if (_arr[0] % primes[i] == 0) {
          factor = primes[i];
          nums.push(primes[i]);
          break;
        }
      }
      console.log("factor", factor);

      _arr = _arr
        .map((n: number) => {
          if (n % factor == 0) return n / factor;
          else return n;
        })
        .filter((n: number) => n != 1);
      console.log("final", _arr);
    } while (_arr.length != 0);

    console.log("nums", nums);

    const _lcm = nums.reduce((acc, cur) => acc * cur, 1);

    console.log("_lcm", _lcm);
    return _lcm;
  };

  const gcdFn = (arr: number[]): number => {
    // console.log("gcd", arr)

    if (arr.length == 1) return arr[0];
    if (arr.some((item) => item == 1)) return 1;

    const nums: number[] = [];

    let _arr = [...arr];
    _arr.sort((a: number, b: number) => a - b);

    do {
      // console.log('_arr', _arr)
      let factor = 0;

      for (let i = 0; i < primes.length; i++) {
        if (_arr.every((n: number) => n % primes[i] == 0)) {
          factor = primes[i];
          nums.push(primes[i]);
          break;
        }
      }
      // console.log("factor", factor)

      _arr = _arr.map((n: number) => n / factor);
      // console.log('final', _arr)
    } while (_arr.length != 0 && _arr.every((n: number) => n != 1));

    // console.log('nums', nums)

    const _gcd = nums.reduce((acc, cur) => acc * cur, 1);

    // console.log('_gcd', _gcd)
    return _gcd;
  };

  const lcm = lcmFn(a);
  console.log("lcm", lcm);
  const gcd = gcdFn(b);

  console.log("lcm", lcm, "gcd", gcd);

  let nums: number[] = [];

  for (let i = 1; i * lcm <= gcd; i++) {
    if (a.some((n: number) => (i * lcm) % n != 0)) continue;
    if (b.some((n: number) => n % (i * lcm) != 0)) continue;
    nums.push(i * lcm);
  }

  console.log(nums);

  return nums.length;
}
