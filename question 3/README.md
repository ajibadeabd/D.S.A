##  Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .

Language
JavaScript (Node.js)

More
2829303132333536373839404142272625344344
    let space = Array(n).fill('\xa0').join('') 
    let hash = "#"
    for(let i=0; i<n; i++){
        console.log(Array(n-1-i).fill('\xa0').join('') +hash)
        hash+="#"
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

Line: 34 Col: 32

Submit Code

Run Code

Upload Code as File

Test against custom input
Wrong Answer :(

1/1 test case failed


Sample Test case 0
Compiler Message
Wrong Answer
Input (stdin)

Download
6
Your Output (stdout)
     #
    ##
   ###
  ####
 #####
######
Expected Output

Download
     #
    ##
   ###
  ####
 #####
######
BlogScoringEnvironmentFAQAbout UsSupportCareersTerms Of ServicePrivacy PolicyRequest a Feature