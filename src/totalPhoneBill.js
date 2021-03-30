function totalPhoneBill(str){
    var newStr = str.split(', ');
    var total = 0;
    for (var i = 0; i < newStr.length; i++){
      var ans = newStr[i];
      if (ans === 'call'){
        total += 2.75;
      }
      if (ans === 'sms'){
        total += 0.65;
      }
    }
    return 'R' + total.toFixed(2).trim();
  }