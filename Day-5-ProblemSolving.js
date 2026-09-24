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
// Problem 23 

function makeCounter(){
    let count = 0 ;
    return {
            increment(){
            count += 1 ;
        },

        decrement(){
count -= 1
        },
        getCount(){
            return count
        }
    };
}
const c = makeCounter() ;
// c.increment();
// c.decrement();
// console.log(c.getCount());

// problem 24
function curry(fn){
    return function (a){
        return function (b){
            return fn(a,b);
            
        };
    };
    
}
const add = curry((a,b) => a + b);
// console.log(add(3)(3));

// problem 25
function memoize(fn){
    const cach = {};
    return function (n){
        if(n in cach){
            return cach[n]
        }
        const result = fn(n);
        cach[n]=result;
        return result
    }
}
const memoAdd = memoize(n => n + 10);
// console.log(memoAdd(5));
// console.log(memoAdd(5));