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

// Problem-3
function largest (a,b,c){
    return Math.max(a,b,c)
}

// Problem-4
function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32
}

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
