function processData(input) {
    //Enter your code here
    var meal = 12;
    var tip = 20;
    var tax = 8;
    var mealTip = (tax * tip )/100
    var mealTax = (tax * meal)/100
    
   var mealPrice = (meal + mealTip + mealTax);
    return mealPrice;
} 
