function greet(name){
    //Throw error if the passed argument is not a string
    if (typeof name !== "string"){
        throw TypeError('greet() expects a string')
    }

    //throw error if there's no passed argument
    if(name === undefined){
        throw TypeError('greet() function expects a name')
    }
    return 'Hello, ' +  name;
}