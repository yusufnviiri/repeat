function testing(oldstrng, n) {
    let newStrng = oldstrng;
  
    let noNumb="' '"
    for (i = 1; i < n; i++) {
      newStrng = newStrng + newStrng;
      newStrng = newStrng;
    } 
    if (n == 0||n<0) {
      return noNumb;
    } else return newStrng
  }
  console.log(testing("purple", 4));
  