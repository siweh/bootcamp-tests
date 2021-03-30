function isWeekDay(days){
    var weekDays = {sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6};
    var isDayOfTheWeek = weekDays.hasOwnProperty(days.toLowerCase());
    if(isDayOfTheWeek){
        if(days.toLowerCase().startsWith('s')){
            return false;
        }
    }
    else{
        throw TypeError('isWeekDay() expects a passed string to be a correct weekday')
    }
    return isDayOfTheWeek;
}