https://www.hackerrank.com/challenges/luck-balance/problem?isFullScreen=true&h_r=next-challenge&h_v=zen







Lena is preparing for an important coding competition that is preceded by a number of sequential preliminary contests. Initially, her luck balance is 0. She believes in "saving luck", and wants to check her theory. Each contest is described by two integers,  and :

 is the amount of luck associated with a contest. If Lena wins the contest, her luck balance will decrease by ; if she loses it, her luck balance will increase by .
 denotes the contest's importance rating. It's equal to  if the contest is important, and it's equal to  if it's unimportant.
If Lena loses no more than  important contests, what is the maximum amount of luck she can have after competing in all the preliminary contests? This value may be negative.

Example



Contest		L[i]	T[i]
1		5	1
2		1	1
3		4	0
If Lena loses all of the contests, her will be . Since she is allowed to lose  important contests, and there are only  important contests, she can lose all three contests to maximize her luck at .

If , she has to win at least  of the  important contests. She would choose to win the lowest value important contest worth . Her final luck will be .

Function Description

Complete the luckBalance function in the editor below.

luckBalance has the following parameter(s):

int k: the number of important contests Lena can lose
int contests[n][2]: a 2D array of integers where each  contains two integers that represent the luck balance and importance of the  contest
Returns

int: the maximum luck balance achievable
Input Format

The first line contains two space-separated integers  and , the number of preliminary contests and the maximum number of important contests Lena can lose.
Each of the next  lines contains two space-separated integers,  and , the contest's luck balance and its importance rating.

Constraints

Sample Input

STDIN       Function
-----       --------
6 3         n = 6, k = 3
5 1         contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]
2 1
1 1
8 1
10 0
5 0
Sample Output

29
Explanation

There are  contests. Of these contests,  are important and she cannot lose more than  of them. Lena maximizes her luck if she wins the  important contest (where ) and loses all of the other five contests for a total luck balance of .

Language
JavaScript (Node.js)

More
484950515253545556575859606162636465666768
        // prev.win++

    }
return prev

},{luck:0}).luck
return response
}

function main() {

Line: 57 Col: 16

Submit Code

Run Code

Upload Code as File

Test against custom input
Problem Solving
You have earned 20.00 points!
You are now 249.26 points away from the gold level for your problem solving badge.
34%600.74/850
Congratulations
You solved this challenge. Would you like to challenge your friends?Share on FacebookShare on TwitterShare on LinkedIn
Next Challenge

Test case 0

Test case 1

Test case 2

Test case 3

Test case 4

Test case 5

Test case 6

Test case 7

Test case 8

Test case 9

Test case 10

Test case 11

Test case 12
Compiler Message
Success
Input (stdin)

Download
6 3
5 1
2 1
1 1
8 1
10 0
5 0
Expected Output

Download
29
BlogScoringEnvironmentFAQAbout UsSupportCareersTerms Of ServicePrivacy Policy