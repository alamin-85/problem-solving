// Task 1
// Problem 1
function swapVars(a,b){
    [a,b]=[b,a]
    return {a,b}
}
// console.log(swapVars(10,5));

// Problem -2
function isEven(n){
    return n%2===0;
}
// console.log(isEven(4));
// console.log(isEven(5));

// Problem-3
function largest (a,b,c){
    return Math.max(a,b,c)
}
// console.log(largest(9,2,6));

// Problem-4
function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32
}
// console.log(toFahrenheit(0));
// console.log(toFahrenheit(100));

// Problem-5
function checkSign(n){
    if(n > 0){
        return "positive";
    } else if(n < 0){
        return "negative";
    } else {
        return "zero";
    }
}

// console.log(checkSign(-7));
// console.log(checkSign(7));
// console.log(checkSign(0));