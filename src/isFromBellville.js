function isFromBellville(regNumber){
    //throws error if there's no passed registration number
    if (regNumber === undefined){
        throw TypeError('isFromBellville() expects a string')
    }
    var regNumberToUpper = regNumber.toUpperCase();
    return regNumberToUpper.startsWith('CY');
}