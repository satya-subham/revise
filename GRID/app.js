// function outer(){
//     let count = 0;
//     return function (){
//         count++;
//         if(count % 3 === 0){
//             console.log('printing');
//         }
//      return count;
//     }
// }

// let counter = outer();
// counter();
// counter()
// counter();












// function fun1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("resolved fun 1");
//     }, 3000);
//   });
// }

// function fun2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("resolved fun 2");
//     }, 2000);
//   });
// }

// async function result() {
//   console.log("printing");

//   const result1 = await fun1();
//   console.log(result1);
//   const result2 = await fun2();
//   console.log(result2)
// }

// result();




let promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
  });
  
 promise.then(result => console.log(result)); 






















// function resolveAfter3Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved 1');
//       }, 3000);
//     });
//   }
  

//   function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved 2');
//       }, 2000);
//     });
//   }


//   async function asyncCall() {
//     console.log('calling');
//     try {
//       console.log(await resolveAfter3Seconds());
//     console.log(await resolveAfter2Seconds());
//     }
//     catch (err) {
//       console.log(err);
//     }

//     const result1 = await resolveAfter3Seconds();
//     console.log(result1);
//     const result2 = await resolveAfter2Seconds();
//     console.log(result2);
//   }
  
//   asyncCall();