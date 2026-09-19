// 6 problem solving
function reverseString(str){
    return str.split("").reverse().join("");
}
// console.log(reverseString("Hello, World!"));

// Problem-7
function vowelCount(str){
    let count = 0;
    for(let i of str){
        if("aeiou".includes(i)){
            count++;
        }
    }
    return count;
}
// console.log(vowelCount("programming Hero"));


// Problem-8
function isPalindrome(str){
    return str === str.split("").reverse().join("")
}
// console.log(isPalindrome("Hello"));
// console.log(isPalindrome("madam"));

//problem-9
function titleCach(str){
    return str
    .split(" ")
    .map((word)=> word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
// console.log(titleCach("i am full stack developer"));

// problem 10
function countChar(str, char){
    return str.split(char).length - 1
}
// console.log(countChar("Programmin Hero","o"));
