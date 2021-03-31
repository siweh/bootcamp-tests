function totalPhoneBill(str){
  //Throw error when there is no calls or sms given
  if (str === undefined){
    throw TypeError('totalPhoneBill() expects a calls or sms given as a string')
  }
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