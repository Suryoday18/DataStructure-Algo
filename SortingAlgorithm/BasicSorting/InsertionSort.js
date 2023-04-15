// It starts with index 1 and comapre the item before it. if it is less swap it.
// [4,2,6,5,1,3] (2, 4)
//[2,4,6,5,1,3] (6, [4,2])
// [2,4,6,5,1,3] (5,[6,4,2])
// [2,4,5,6,1,3](1,[6,5,4,2])
// [1,2,4,5,6,3] (3, [1,2,4,5])
// [1,2,3,4,5,6]

//* if you have almost sorted data, you should use this type of sorting. Though it is O(n^2) but it will result O(n) in case of almost sorte array

function insertionSort(arr){
    let temp
    for(let i=1; i<arr.length; i++){
        temp = arr[i]
        for(var j=i-1; arr[j] > temp && j>-1; j--){ // to access the variable outside the scope, a lot of time i stuck how to use this j outside of scope, fuck man!! i got the answer here.
            arr[j+1] = arr[j]
        }
        arr[j+1] = temp
    }
    return arr
}
console.log(insertionSort([4,2,6,5,1,3]));