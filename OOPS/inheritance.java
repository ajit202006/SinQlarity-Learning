// Inheritance = Accessing function and attributes of one class by another class object
// Super class = The class being inherited
// Sub class = The class that is inheriting
public class inheritance{
    public static void main(String [] args){
        // creating object of dog class
        Dog dog=new Dog();
        // Dog class inherits Animal class
        // So when we print attributes eyes and legs even if it doesn't had them it will inherit it from Animal class
        System.out.println(dog.eyes);
        System.out.println(dog.legs);
        // Also walk function can also be called because it is also inherited to Dog class.
        dog.walk();
        // And the function of Dog class remain unchanged So 
        dog.bark(); // will run bark function from dog class

    }
}

// Creating a class
class Animal{
    int eyes=2;
    int legs=4;
    public void walk(){
        System.out.println("Animal is walking.");
    }
}
// Creating another class Dog 
// extends keyword is used to inherit a class 
class Dog extends Animal{
    public void bark(){
        System.out.println("Dog is barking.");
    }
}