function Person(initial_Age){
    // Add some more code to run some checks on initial_Age

    if (initial_Age < 0){
        var age = initial_Age;
        initial_Age = 0;
        console.log("This person is not valid, setting age to 0.");
    } else (initial_Age > 1) 
        var age = initial_Age;
    };
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
      if(Person.initial_Age < 13){
          console.log("You are young.");
      } else if (Person.initial_Age >= 13 && Person.initial_Age < 18){
          console.log("You are a teenager.");
      } else {
          console.log("You are old.");
      };
      
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
       Person.initial_Age + 1;
      
   };