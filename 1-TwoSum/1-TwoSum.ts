function twoSum(nums: number[], target: number): number[] { 
  const sol: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (sol.hasOwnProperty(diff)) {
      return [sol[diff], i];
    }
    sol[nums[i]] = i;
  }
};

/*
  let sol: number[] = [];

  for (let i = 0; i < nums.length-1; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        sol = [i, j];
      }
    }
  }
  return sol;

*/
