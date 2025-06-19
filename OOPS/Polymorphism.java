// Polymorphism = Using same thing in multiple forms
public class Polymorphism{
    public static void main(String [] args){
        // Example 1 ----->
        // Both demo function have same name but will give different output for different types of arguments
        System.out.println("Explaining Compile-time Polymorphism.")
        PolyExample p = new PolyExample();
        p.demo(9);// Will output first demo function's result
        p.demo('h');// Will output second demo function's result
        // Here we are using same name functions of same class to produce different outputs this is called Compile-time Polymorphism or Method Overloading in Java
        

        // Example 2 ----->
        // Creating object of inherited class
        System.out.println("Explaining Run time Polymorphism.")
        inherited i=new inherited();
        i.demo(); // This will call demo function of inherited class
        i.demo(9); // Calls the demo function of PolyExample class with parameter of integer type.
        i.demo('c'); // Calls the demo function of PolyExample class with parameter of character type.
        // Here same function acts differently for different parameters even when it is called from different classes. 
        // This is called Runtime Polymorphism or Method Overriding in Java.
        

    }
}

class PolyExample{
    // Creating demo function with integer as parameter type
    public void demo(int para){
        System.out.println("Passed integer as argument.");
    }
    // Creating demo function with character as parameter type
    public void demo(char para){
        System.out.println("Passed character as argument.");
    }
}
class inherited extends PolyExample{
    // creating demo function in sub class of PolyExample class.
    public void demo(){
        System.out.println("No parameter passed.");
    }
}