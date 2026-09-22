// Problem 16
function countProperties(obj){

  return Object.keys(obj).length
}
// console.log(countProperties( {a: 1, b: 2, c: 3})  );

// Problem 17
function mergeObjects(obj1, obj2){
    return {...obj1,...obj2}
}
// console.log(mergeObjects({a:1}, {b:2}));

// Problem 18
function fizzBuzz(n){

    for(let num = 1 ; num <= n ; num++){
        if(num % 3 === 0 && num % 5 === 0){
            console.log("FizzBuzz");
        } else if(num % 3 === 0){
            console.log("Fizz");
        } else if(num % 5 === 0){
            console.log("Buzz");
        } else{
            console.log(num);
        }
        

    }
}
// fizzBuzz(15);
// Problem 19
function invertObject(obj){
    return Object.entries(obj).reduce((result,[keys,value]) =>{
        result [value] = keys ;
        return result
    },{}) ;
}
// console.log(invertObject( {a: 1, b: 2}));

// Problem 20
function findDuplicateNames(arr){
    const names = arr.map((user) => user.name);
    const duplicates = names.filter((name,index) =>{
return names.indexOf(name) !== index
    })
    return duplicates
}
// console.log(
//     findDuplicateNames([
//         { name: "Abrar", age: 20 },
//         { name: "Karim", age: 11 },
//         { name: "Karim", age: 20 },
//         { name: "Rahim", age: 25 },
//         { name: "Sakib", age: 30 }]))