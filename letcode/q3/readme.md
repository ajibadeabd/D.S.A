https://leetcode.com/problems/a-number-after-a-double-reversal/

2119. A Number After a Double Reversal
Easy
456
26
Companies
Reversing an integer means to reverse all its digits.

For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

 

Example 1:

Input: num = 526
Output: true
Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
Example 2:

Input: num = 1800
Output: false
Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
Example 3:

Input: num = 0
Output: true
Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.
 

Constraints:

0 <= num <= 106
Accepted
51.8K
Submissions
67.6K
Acceptance Rate
76.7%
Seen this question in a real interview before?
1/4
Yes
No
Similar Questions
Related Topics
Copyright ©️ 2023 LeetCode All rights reserved