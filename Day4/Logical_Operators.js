function Person(initial_Age){
    // Add some more code to run some checks on initial_Age

    if (initial_Age < 1){
        var age = initial_Age;
        initial_Age = 0;
        print "This person is not valid, setting age to 0.";
    } else (initial_Age > 1){
        var age = initial_Age;
    };
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
      if(Person.initial_Age < 13){
          print "You are young.";
      } else if (Person.initial_Age >= 13 && Person.initial_Age < 18){
          print "You are a teenager.";
      } else {
          print "You are old.";
      };
      
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
       Person.initial_Age + 1;
      
   };
}