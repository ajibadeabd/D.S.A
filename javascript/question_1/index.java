package question_1;

public class index {
    public static void main(String[] args) {
        int[][] arraysOfNumbers = { {2,3,4}, {2,3,4}, {1,3,4} };
        Integer ans1 = 0;
        Integer ans2 = 0;
        Integer length = arraysOfNumbers.length-1;
        for (int i = 0; i < arraysOfNumbers.length; i++) {
            ans1+=arraysOfNumbers[i][i];
            ans2+=arraysOfNumbers[i][length-i];
        };
        Integer response = Math.abs(Math.abs(ans1)- Math.abs(ans2));
        System.out.println(response);
    }
};

