First will make pivot point 
Will try to place that item in such a way that it holds its correct postion even before sorting.
once the pivot got its place, we need to repeat the same operation on their left elements and their right elements [4,6,1,7,3,2,5] - [1,3,2,4,5,7,6] -> pick left and right again , choose one pivot point and continue doing the same 

Here we are not creating any extra space, we are just swapping the elements of the original array.
So the space complexity is - O(1)
Time Complexity is - O(n) as we are iterating the elements only in for loop and no of times its iterate is O(logn) - so the TC is O(nlogn)

If you have almost sorted data then use insertion sort.

It is best case, when you have random data as it has space complexity - O(1) better than merge and time complexity - O(nlogn)