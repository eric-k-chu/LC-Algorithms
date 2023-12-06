class MinHeapNode {
  constructor(public value: number, public frequency: number) {}
}

function topKFrequent(nums: number[], k: number): number[] {
  const count: Record<number, number> = {};
  const freq: number[][] = new Array(nums.length + 1).fill([]).map(() => []);
  
  for (const n of nums) {
    count[n] = 1 + (count[n] || 0);
  }

  for (const [n, c] of Object.entries(count)) {
    freq[c].push(parseInt(n));
  }

  const result: number[] = [];

  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      result.push(n);
      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
}
