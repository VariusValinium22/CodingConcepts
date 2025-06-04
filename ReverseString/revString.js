function revString(str) {
    return str.split('').reverse().join('');
  };

  console.log(revString('super duper'));

//for loop ============================================
function revStringLoop(str) {
    let reversed = '';
    for (let i =  str.length - 1; i>=0; i--) {
      reversed += str[i];
    }
    return reversed;
}

console.log(revStringLoop('super duper pooper'));
