https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign



Given two strings, determine if they share a common substring. A substring may be as small as one character.

Example


These share the common substring .



These do not share a substring.

Function Description

Complete the function twoStrings in the editor below.

twoStrings has the following parameter(s):

string s1: a string
string s2: another string
Returns

string: either YES or NO
Input Format

The first line contains a single integer , the number of test cases.

The following  pairs of lines are as follows:

The first line contains string .
The second line contains string .
Constraints

 and  consist of characters in the range ascii[a-z].
Output Format

For each pair of strings, return YES or NO.

Sample Input

2
hello
world
hi
world
Sample Output

YES
NO
Explanation

We have  pairs to check:

, . The substrings  and  are common to both strings.
, .  and  share no common substrings.
Language
JavaScript (Node.js)

More
323334353638393740414542444743464849505152
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
    // Write your code here
    let hashedString = s1.split("").reduce((initial,current)=>{
        initial[current]=current
        return initial
    },{})
    
    for(let i=0;i<s2.length;i++){
        if(s2[i]===hashedString[s2[i]]){
            return "YES"
        }
    }
    return "NO"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

Line: 47 Col: 2

Submit Code

Run Code

Upload Code as File

Test against custom input
Problem Solving
You have earned 25.00 points!
You are now 178.73 points away from the gold level for your problem solving badge.
52%671.27/850
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
Compiler Message
Success
Input (stdin)

Download
2
hello
world
hi
world
Expected Output

Download
YES
NO
BlogScoringEnvironmentFAQAbout UsSupportCareersTerms Of ServicePrivacy Policy