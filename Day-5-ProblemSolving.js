// Problem 21
function factorial(n){
    if(n===1){
        return 1
    } else{
        return n * factorial (n -1)
    }
}
// console.log(factorial(5));

// Problem 22
function fibonacci(n){
    if(n=== 0){
        return 0
    } else if(n===1){
        return  1
    }
    let a = 0;
    let b =1;
for(let i = 2;i<=n ;i++){
    let result = a + b;
    a = b ;
    b = result ;

}
return b
}
// console.log(fibonacci(6));
