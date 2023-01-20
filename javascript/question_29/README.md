 https://www.hackerrank.com/challenges/marcs-cakewalk/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign&h_r=next-challenge&h_v=zen



 Marc loves cupcakes, but he also likes to stay fit. Each cupcake has a calorie count, and Marc can walk a distance to expend those calories. If Marc has eaten  cupcakes so far, after eating a cupcake with  calories he must walk at least  miles to maintain his weight.

Example

If he eats the cupcakes in the order shown, the miles he will need to walk are . This is not the minimum, though, so we need to test other orders of consumption. In this case, our minimum miles is calculated as .

Given the individual calorie counts for each of the cupcakes, determine the minimum number of miles Marc must walk to maintain his weight. Note that he can eat the cupcakes in any order.

Function Description

Complete the marcsCakewalk function in the editor below.

marcsCakewalk has the following parameter(s):

int calorie[n]: the calorie counts for each cupcake
Returns

long: the minimum miles necessary
Input Format

The first line contains an integer , the number of cupcakes in .
The second line contains  space-separated integers, .

Constraints

Sample Input 0

3
1 3 2
Sample Output 0

11
Explanation 0

Let's say the number of miles Marc must walk to maintain his weight is . He can minimize  by eating the  cupcakes in the following order:

Eat the cupcake with  calories, so .
Eat the cupcake with  calories, so .
Eat the cupcake with  calories, so .
We then print the final value of , which is , as our answer.

Sample Input 1

4
7 4 9 6
Sample Output 1

79
Explanation 1


Language
JavaScript (Node.js)


More
20212216171819910111213141523456781

function marcsCakewalk(calorie) {
    // Write your code here
    
return calorie.sort((a,b)=>b-a).reduce((prev, curr,i)=>{
    prev += ((2**i) * curr)
    return prev
 },0)

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const calorie = readLine().replace(/\s+$/g, '').split(' ').map(calorieTemp => parseInt(calorieTemp, 10));

    const result = marcsCakewalk(calorie);

Line: 41 Col: 1

Submit Code

Run Code

Upload Code as File

Test against custom input
Problem Solving
You have earned 15.00 points!
You are now 289.26 points away from the gold level for your problem solving badge.
23%560.74/850
Congratulations
You solved this challenge. Would you like to challenge your friends?Share on FacebookShare on TwitterShare on LinkedIn
Next Challenge

Test case 0

Test case 1

Test case 2

Test case 3

Test case 4

Test case 5
Compiler Message
Success
Input (stdin)

Download
3
1 3 2
Expected Output

Download
11
Authorsatyaki3794
DifficultyEasy
Max Score15
Submitted By75762
NEED HELP?
View discussions
View editorial
View top submissions
RATE THIS CHALLENGE

MORE DETAILS
Download problem statement
Download sample test cases
Suggest Edits
Share on FacebookShare on TwitterShare on LinkedIn
BlogScoringEnvironmentFAQAbout UsSupportCareersTerms Of ServicePrivacy Policy