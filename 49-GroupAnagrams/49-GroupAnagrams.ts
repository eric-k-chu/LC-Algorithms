function groupAnagrams(strs: string[]): string[][] {
  const res: Record<string, string[]> = {};

  for (const str of strs) {
    const charCount = Array(26).fill(0);

    for (const char of str) {
      const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
      charCount[charIndex]++;
    }
    const key = charCount.join('.');

    if (res[key]) {
      res[key].push(str);
    } else {
      res[key] = [str];
    }
  }   

  return Object.values(res);
};
