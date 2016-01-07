You will create a class Person and write a constructor that takes an integer, initial_Age. In this constructor, you should check that the initial_Age is not negative because we can't have people with negative ages.

If the initial_Age is negative, set the instance's age equal to zero then print

"This person is not valid, setting age to 0."
without the quotations..

Inside of this class, you will also create an instance variable called age and if initial_Age is not negative, then you will set age to equal the value of initial_Age. In addition, you will write an instance method, amIOld(), that prints whether people are old or not to the console.

In amIOld(), do the following things:

If the age of the Person instance is less than 13, then print "You are young."
If the age of the Person instance is equal or greater than 13, but less 18, print "You are a teenager."
Otherwise, print "You are old."
In addition, create an instance function called yearPasses() that increases the age of the person instance by one.