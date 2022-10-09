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
let nums = [-1, -20, -32, -17, -89, -10, -27, -100];
let max = nums[0];
for(let i=1; i<nums.length; i++){
    if(max < nums[i]){
        max = nums[i]
    }
}
console.log(max);