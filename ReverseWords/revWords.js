function revWord(str) {
    return str.split(' ').reverse().join(' ');
  };

console.log(revWord('super duper'));

  //for loop that reverses the order of FULL WORDS ================================================
  function revWords(str) {
    const words = str.split(' ');
    let reversed = '';
    
    for (let i = words.length - 1; i >= 0; i--) {
      reversed += words[i];
      if (i !== 0) {
        reversed += ' ';
      }
    }
    return reversed;
  }
  
  console.log(revWords('super duper pooper'));
