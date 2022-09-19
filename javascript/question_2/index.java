package question_2;

public class index {
    public static void main(String[] args) {
        int[] arraysOfNumbers = {1,2,-3};
        double zeros = 0;
        double positive = 0;
        double negative = 0;
        for (int i = 0; i < arraysOfNumbers.length; i++) {
        if(arraysOfNumbers[i]<0){
          negative+=1;
        System.out.println(arraysOfNumbers[i]);
        }
        else if(arraysOfNumbers[i]==0){
          zeros+=1;
        System.out.println(arraysOfNumbers[i]);
        }else{
          positive+=1;
        System.out.println(arraysOfNumbers[i]);
        }
    }
    System.out.println(  positive/ arraysOfNumbers.length);
    System.out.println(  negative/ arraysOfNumbers.length);
    System.out.println(  zeros/ arraysOfNumbers.length);
     }
};
