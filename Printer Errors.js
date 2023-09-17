function printerError(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] > 'm') {
        count++;
      }
    }
    return count + '/' + str.length;
  }
  printerError('aabbbbiiim');  // 0/10
  printerError('amnnoooopp');  // 8/10