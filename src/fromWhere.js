function fromWhere(regNumber){
  //Throw error when there's no registration number given
  if(regNumber === undefined){
    throw TypeError('fromWhere() expects a registration number')
  }
    switch (regNumber){
      case "CY":
        return "Bellville";
      case "CJ":
        return "Paarl";
      case "CA":
        return "Cape Town";
      default:
        return "Some other place!";
       }
  };