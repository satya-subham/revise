// repeating numbers
// let left = [1,3,4,3,2,5,7,1]
// let right = []
// for (let i = 0; i < left.length; i++) {
//     if(right.includes(left[i])){
//         console.log(left[i]);
//     }else{
//         right.push(left[i])
//     }
// }


// ==============================================================

// first repeating numbers (if you don't add break it will print all repeating number)
// let left = [1,3,4,3,2,5,7,1]
// for (let i = 0; i < left.length; i++) {
//     if(left.includes(left[i], i+1)){
//         console.log(left[i]);
//         break;
//     }
// }



// =================================================================

// first non repeating numbers (if you don't add break it will print all non repeating number)
// let left = [1,3,4,3,2,5,7,1]
// for (let i = 0; i < left.length; i++) {
//     if(!left.includes(left[i], i+1)){
//         console.log(left[i]);
//         break;
//     }
// }



// non repeatnig numbers (if don't use break it will print all non repeating numbers)

// let nums = [1, 2, 1, 2, 1, 3, 4]
// for(let i=0; i < nums.length; i++){
//     if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
//         console.log(nums[i]);
//     }
// }

// =================================================================

// Largest number
// let nums = [1, 20, 32, 17, 89, 10, 27, 100];
// let max = nums[0];
// for(let i=1; i<nums.length; i++){
//     if(max < nums[i]){
//         max = nums[i]
//     }
// }
// console.log(max);

// Largest number (negative value)
// let nums = [-1, -20, -32, -17, -89, -10, -27, -100];
// let max = nums[0];
// for(let i=1; i<nums.length; i++){
//     if(max < nums[i]){
//         max = nums[i]
//     }
// }
// console.log(max);



// ================================================================
// square of array

// let nums = [1, 2, 3, 4]
// let newNums = []
// for (let i = 0; i < nums.length; i++) {
//     newNums.push(nums[i]**2)
    
// }
// console.log(newNums);




// =================================================================
// remove false value

// let nums = [1, '', false, true, 'subham', null, undefined];

// let truthValue = nums.filter(Boolean);

// console.log(truthValue);


// let arr = [1, 2, 3, 4];
// let str = "1,2,3";
// console.log(arr == str);







// ================================================================
// shorting alogiridoms

// Linear search

let nums = [10, 13, 69, 45, 36, 76]
let target = 69;

for(let i=0; i<nums.length; i++){
    if(nums[i] === target){
        console.log(true);
    }
}

function findTarget(nums, target){
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            return true;
        }
    }
    return false;
}
console.log(findTarget(nums, target));