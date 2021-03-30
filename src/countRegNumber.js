function countRegNumber(regNumber){
    //Throw error when there's no given registration numbers
    if (regNumber === undefined){
        throw TypeError('countRegNumber() expects a list of registration numbers')
    }
    return regNumber.split(',').length;
}