import { power } from 'js-combinatorics';

export function run(data, size = 150) {
  let numbers = data.split(/[\r\n]+/).filter(r => r.length).map(n => parseInt(n, 10));
  let sums = {};

  power(numbers).forEach(variant => {
    let tmp = variant.length ? variant.reduce((a, b) => a + b) : 0;
    if (tmp == size) {
      if (!sums[variant.length]) {
        sums[variant.length] = 0;
      }
      sums[variant.length]++;
    }
  });

  let minKey = Math.min.apply(null, Object.keys(sums));
  return sums[minKey];
};
