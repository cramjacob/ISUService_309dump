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


    public static void main(String args[]){
        Request r = new Request("Singing", 7);
        System.out.println(r.getName());
    }
}