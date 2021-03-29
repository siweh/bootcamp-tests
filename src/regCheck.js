function regCheck(regNumber, registrationPlate){
    
    if (regNumber === undefined && registrationPlate === undefined){
        throw TypeError('regCheck() expects a string')
    }

    var regPlateToUpper = registrationPlate.toUpperCase();
    
    return regNumber.toUpperCase().endsWith(regPlateToUpper);
}