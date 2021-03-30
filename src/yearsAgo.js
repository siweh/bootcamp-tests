function yearsAgo(year){
    var currentYear = new Date();

    //Throw error when given a year passed in a string
    if (year === undefined || typeof year === "string"){
        throw TypeError('yearsAgo() expects a year passed as a number.')
    }

     return (currentYear.getFullYear() - year);
  }