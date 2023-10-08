function getLetterFrequency(words) {
  // Start coding here
  let newWord = words.toLowerCase();
  let obj = {};
  for (let i of newWord) {
    obj[i] = (obj[i] || 0) + 1;
  }
  return obj;
}

const str = "Techupth";

console.log(getLetterFrequency(str));

/* Output:
{
  t: 2,
  e: 1,
  c: 1,
	h: 2,
	u: 1,
	p: 1
}
*/
