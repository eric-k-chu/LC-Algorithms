function containsDuplicate(nums: number[]): boolean {
  const unique = new Set();

  for (const num of nums) {
    if(unique.has(num)) return true;

    unique.add(num);
  }
  return false;
};
