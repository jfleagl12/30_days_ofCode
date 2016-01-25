You're given the pointer head pointing to the head node of a linked list, where the data in the nodes is in non decreasing order. Delete as few nodes as possible so that the list does not contain any value more than once. The given head pointer may be null indicating that the list is empty. Adjust the next pointers to ensure that the remaining nodes form a single sorted linked list

The code for handling input/output is already given in the editor. You have to complete the function removeDuplicates given in the editor which takes one argument - the head of the linked list .

Good luck!

Input Format

First line contains T, the number of testcases. Each test case contains an integer data to be inserted at tail of linked list. 
Note: The input data for each test case is always given in non-decreasing order.

Output Format

Print the data in each node of linked list separated by a space after the deletion of duplicates as given in problem statement.

Sample Input

6
1
2
2
3
3
4
Sample Output

1 2 3 4 
Explanation

T = 6 
2 and 3 are repeated so after deleting the nodes with repeated values the linked list becomes

1 2 3 4