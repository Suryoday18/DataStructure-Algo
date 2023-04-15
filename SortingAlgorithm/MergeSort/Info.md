how merge sort works:
[5,4,7,1,3,2,8,6]: [5,4,7,1] , [3,2,8,6] : [5,4], [7,1], [3,2], [8,6]:[5],[4],[7],[1],[3],[2],[8],[6] - cut the array half until it reaches to length 1, it becomes single items array and single items array by defination is sorted.
then we can do , take the first two and combine them into sorted array of length 2 again doing the same
[5],[4],[7],[1],[3],[2],[8]: [4,5], [1,7], [2,3], [6,8]: [1,4,5,7], [2,3,6,8]: [1,2,3,4,5,6,7,8]

Space complexity is O(n) -> As you are breaking down the n elements to n spaces
Time Complexity is -> You are braking down the 8 elements into the 1 in 3 steps, so this steps cover O(logn), to put them back together will have to iterate each and every item , so putting them back together is O(n) => O(n) + O(logn) = O(nlogn) better than O(n^2)