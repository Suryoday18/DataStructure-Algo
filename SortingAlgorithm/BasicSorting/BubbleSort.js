//logic: Every elements compare itself to the next one, if it is lesser than it shift itself
// Every time the no of steps will be reduced, first one will iterate through n-1, second time n-2 and so on
// so total no of steps will be n-1 + n-2 = n^2 - n = O(n^2)
//[2,4,6,5,1,3] 6>5 i=5, j=2
//[2,4,5,6,1,3] 6>1 i=5, j=3
//[2,4,5,1,6,3] 6>3 i=5, j=4
//[2,4,5,1,3,6]

//[2,4,5,1,3,6] 5>1 i=4, j=2
//[2,4,1,5,3,6] 5>3 i=4, j=3
//[2,4,1,3,5,6]

//[2,4,1,3,5,6] 4>1 i=3, j=1
//[2,1,4,3,5,6] 4>3 i=3, j=2
//[2,1,3,4,5,6]

//[2,1,3,4,5,6] 2>1 i=2, j=0
//[1,2,3,4,5,6] 

//[1,2,3,4,5,6] i=1 





function bubbleSort(array){
    for(let i = array.length-1; i > 0; i--){
        for(let j=0; j<i; j++){
            if(array[j] > array[j+1]){
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
      }
    }
    return array
}

console.log(bubbleSort([2,4,6,5,1,3]));