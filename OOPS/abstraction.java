// Abstraction = hiding unnecessary background details and showing only the work to the user.
// Abstraction = Simplifying complex things to improve understanding.
public class abstraction{
    public static void main(String []args){
        //Creating object of Animal class
        Animal an=new Animal();
        // We are calling walk function of an 
        // We don't know how the function works we just call it 
        //This is abstraction where we don't know internal functioning but only the work done.
        an.walk();

    }
}
//Creating an animal class
class Animal{
    int eyes=2;
    int legs=4;
    public void walk(){
        System.out.println("Animal is walking");
    }
}