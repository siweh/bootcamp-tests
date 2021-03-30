function countAllFromTown(regNumbers, startStr){
    //Throw error when there's no passed reg numbers for that town
    if (regNumbers === undefined && startStr === undefined){
        throw TypeError('countAllFromTown() expects a string')
    }
    var str = regNumbers.split(',');
    var newStr = [];
    for (var i = 0; i < str.length; i++){
      if (str[i].trim().startsWith(startStr)){
      newStr.push(str[i].trim());
      }
    }
    return newStr.length;
  }