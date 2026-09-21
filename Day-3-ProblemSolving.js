// Problem 11
function sumArray(arr){
    let sum = 0;
    for(let num of arr){
         sum = sum + num;
    }
      return sum
}
// console.log(sumArray([1, 2, 3, 4, 5]));

// Problem 12 
function findMax(arr){
    let max = arr[0];
    for( let num of arr ){
        if(num > max){
            max = num ;
        }
        
    }
return max
}
// console.log(findMax([2,22,5,67]));

// Problem 13
function duplicatArray(arr){
    let uniqueArr = new Set(arr);

    return [...uniqueArr];


}
// console.log(duplicatArray([1,2,2,1,4,5,6]));

// Problem 14
 function flattenArray(arr){

return arr.flat()
 }

//  console.log(flattenArray([1, [2, 3], [4, 5]]));

// Problem 15 
function chunkArray(arr, size){
let result = [];
for(let i = 0; i <arr.length; i += size){
     result.push(arr.slice(i, i + size))
}
return result
}
// console.log(chunkArray([1, 2, 3, 4, 5], 2));