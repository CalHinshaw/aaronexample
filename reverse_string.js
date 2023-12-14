function reverseString(s) {
  let res = "";

  for (let i = s.length - 1; i >= 0; i--) {
    res = res + s[i]
  }

  return res;
}

console.log(reverseString("this is a string"))
console.log(reverseString("aaron"))
