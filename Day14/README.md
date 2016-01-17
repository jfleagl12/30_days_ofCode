The absolute difference between two integers, a and b, is |a−b|. The maximum absolute difference of two integers in a set of positive integers, elements, is the largest absolute difference of any two integers in elements.

The class Difference is started for you in the editor. It has a private instance array (elements) for storing N non-negative integers, and a public integer (maxDifference) for storing the maximum absolute difference.

Code for handling Input/Output is provided for you in the editor. Your task is to write the class constructor for Difference and the computeDifference method so that it finds the maximum absolute difference between any two numbers in N and stores it in maxDifference.

Good Luck!

Input Format

The first line contains a positive integer, N, denoting the size of array elements. The second line contains N space-separated positive integers describing elements.

Constraints 
1≤N≤10 
1≤elements[i]≤100, where 0≤i≤N−1

Output Format

Print the maximum absolute difference between any two integers in elements.

Sample Input

3
1 2 5
Sample Output

4
Explanation

|1-2|=1  
|1-5|=4  
|2-5|=3  
We print the maximum of these absolute differences, which is 4.