class Student
    def initialize(firstName,lastName,phone)
        @firstName=firstName
        @lastName=lastName
        @phone=phone
    end
    def display()
        print("First Name: ",@firstName,"Last Name: ",@lastName+"Phone: ",@phone)
    end
end
# Do not touch above
class Grade <Student
    
end