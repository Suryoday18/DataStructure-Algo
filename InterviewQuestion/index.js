function itemInCommon(arr1, arr2){
    for(let i=0; i<arr1.length; i++){// this is ineffecient method of time complexity O(n^2)
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]) return true
        }
    }
    return false
}

// lets make it more effecient 
function itemsInCommon(arr1, arr2){
    let obj = {}
    for(let i=0; i<arr1.length; i++){
        obj[arr1[i]] = true
    }
    for(let j=0; j<arr2.length; j++){
        if(obj[arr2[j]]) return true
    }
    return false
}
// this function has the tc of O(2n) i.e O(n) so it is more effecient than the previous one

console.log(itemInCommon([1,3,5], [2,4,5]));
console.log(itemsInCommon([1,3,5],[2,4,5]));