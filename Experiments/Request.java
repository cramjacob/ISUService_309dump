import java.util.Scanner;

public class Request{

    
    String name1;
    int price1;

    public Request(String name, int price){
        name1 = name;
        price1 = price;
        getName();
    }

    public String getName(){
        return name1;
    }

    public int getPrice(){
        return price1;
    }

    public void setName(){
        System.out.println("What's the request: ");
        Scanner scan = new Scanner(System.in);
        name1 = scan.next();
	scan.close();
    }


    public static void main(String args[]){
        Scanner scan2 = new Scanner(System.in);
        Request r = new Request("Singing", 7);
        System.out.println("Request Name: " + r.getName());
        System.out.println("Price: " + r.getPrice());
        System.out.println("Would you like to change request y/n");
        String input = scan2.next();
        if(input.equals("y")){
            r.setName();
            System.out.println();
            System.out.println();
            System.out.println("New request is: " + r.name1);
        }
        else{
            System.out.println();
            System.out.println();
            System.out.println("Okay goodbye");
        }
    	scan2.close();
    }
}