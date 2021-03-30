function countAllPaarl(regNumbers){
    //Throw error when there's no reg number passed
    if (regNumbers === undefined){
        throw TypeError('countAllPaarl() expects a string')
    }
    var str = regNumbers.split(', ');
    var newStr = [];
    for (var i = 0; i < str.length; i++){
      if (str[i].startsWith('CJ')){
        newStr.push(str[i]);
      //if (str[i] != "")
      }
    }
    return newStr.length;
}