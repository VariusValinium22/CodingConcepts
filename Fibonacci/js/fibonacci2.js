// Run: node fibonacci2.js

function fibonacci2(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    const f = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2];
    }
  
    return f[f.length - 1];
  }
  
  // Generate a list of the first 10 Fibonacci numbers
  const fibList = [];
  for (let i = 0; i < 10; i++) {
    fibList.push(fibonacci2(i));
  }
  console.log(fibList);
  