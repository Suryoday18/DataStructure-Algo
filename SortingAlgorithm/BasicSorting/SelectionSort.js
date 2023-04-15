// storing the index of the array element that has the lower value compared to all value
//[2,4,6,5,1,3] min = 0, min = 5
// [1,4,6,5,2,3] min = 1, min = 5
// [1,2,6,5,4,3] min = 2, min =6
// [1,2,3,5,4,6] min=3, min=5
//[1,2,3,4,5,6] min=4, min=4
//[1,2,3,4,5,6]

function SelectionSort(arr){
    let min
    for(let i=0; i<arr.length-1; i++){
        min = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[min]) min = j
        }
        if(i !== min){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}
console.log(SelectionSort([2,4,6,5,1,3]));
