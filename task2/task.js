export function countDifferentLetters(sentence) {
  if (!sentence) return 0;

  const obj = {};
  sentence
    .split("")
    .map((char) =>
      char.match(/^[A-Za-z]$/) ? (obj[char.toLowerCase()] = 1) : ""
    );
  const uniqueLetters = Object.keys(obj);
  return uniqueLetters.length;
}
