function fibonacci(n) {
  let n1 = 1;
  let n2 = 0;
  let r = 0;

  if (n === 0) return 0;
  if (n === 1) return 1;

  for (let i = 1; i < n; i++) {
      r = n1 + n2;
      n2 = n1;
      n1 = r;
  }
  return r;
}

const fiblist = [];
for (let i = 0; i < 10; i++) {
  fiblist.push(fibonacci(i));
}

console.log(fiblist.join(', '));
console.log("Is dataType a number? " + (typeof fiblist[0] === "number"));






