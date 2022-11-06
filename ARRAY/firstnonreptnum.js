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
// console.log(right);

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

// let nums = [10, 13, 69, 45, 36, 76]
// let target = 69;

// for(let i=0; i<nums.length; i++){
//     if(nums[i] === target){
//         console.log(true);
//     }
// }

// function findTarget(nums, target){
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] === target){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(findTarget(nums, target));






// Binary search
// let nums = [10, 13, 69, 45, 36, 76].sort();
// let target = 69;
// let start = 0;
// let end = nums.length - 1;

// while(start <= end){
//     let middle = Math.floor(start + end / 2);
//     if(nums[middle] == target){
//         console.log(nums[middle]);
//         start+=1
//         end-=1
//     }else if(nums[middle] < target){
//         start = middle + 1
//     }else{
//         end = middle -1
//     }
// }







//=================================================================
// Anagram
// let word1 = "god"
// let word2 = "dog"
// if(word1.split('').sort().join('') == word2.split('').sort().join('')){
//     console.log("anagram");
// }else{
//     console.log("not an anagram");
// }

// Frequencey (how many times word is used)

// let words = 'hdsvgiu efgaugbva jkbvjkabeig';
// let target = 'c';
// let count = 0;

// for(let i=0; i<words.length; i++){
//     if(words[i] == target){
//         count+=1
//     }
// }
// console.log(count);








// ================================================================
// Unique chars

// let chars = ['a', 'b', 'a', 'c', 'b']
// let uniqueChars = []

// for(let i=0; i<chars.length; i++){
//     if(!uniqueChars.includes(chars[i])){
//         uniqueChars.push(chars[i])
//     }
// }
// console.log(uniqueChars);


// CALLBACK METHOD (unique array)
// let chars = ['a', 'b', 'a', 'c', 'b']

// let uniqueChars = chars.filter((char, index)=>{
//     return chars.indexOf(char) === index;
// })
// console.log(uniqueChars);


// Duplicates
// let chars = ['a', 'b', 'a', 'c', 'b']

// let uniqueChars = chars.filter((char, index)=>{
//     return chars.indexOf(char) !== index;
// })
// console.log(uniqueChars);






// ================================================================
// sort by keys

// let obj = {
//     name: 'satya',
//     age: '23',
//     country: 'india'
// }

// let newObj = Object.keys(obj).sort();

// let newObjKeys = {};

// for (let key of newObj){
//    newObjKeys[key] = obj[key]
// }
// console.log(newObjKeys);






// var removeElement = function(nums, val) {
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] == val){
//             nums.splice(i, 1)
//             i--;
//         }
//     }
//     return nums;
// };
// console.log(removeElement([0,1,2,2,3,0,4,2],2));





// var plusOne = function(digits) {
//    digits = digits.join('')
//    digits = parseInt(digits)
//    digits = digits+1;
//    let newDigits = digits.split()
//    return newDigits;
// };
// console.log(plusOne([1,2,3]));



// var merge = function(nums1, m, nums2, n) {
//    let newNums = nums1.concat(nums2).sort()
//    return newNums;
// };
// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));




// function outer(){
//    let count = 1;
//    return function inner(){
//       count++;
//       return count;
//    }

// }
// console.log(outer()); 