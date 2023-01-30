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




// let promise = new Promise(resolve => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
  
//  promise.then(result => console.log(result)); 









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












// enter to atm
// wellcome
// punching card 2sec
// entering pin 5sec
// processing 7sec
//collect cash 2sec
// remove card 2sec
// thank you 

// function enterToAtm(){
//   return new Promise((resolve, reject) => {
//     resolve('enter to atm');
//   })
// }
// function wellcome(){
//   return new Promise((resolve, reject) => {
//     resolve('wellcome');
//   });
// }
// function punchingCard(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve('punching card')
//     }, 2000)
//   })
// }
// function enterPin(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve('enter pin');
//     }, 5000)
//   })
// }
// function processing(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve('processing');
//     }, 7000)
//   });
// }

// function collectCash(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve('collect cash')
//     }, 2000)
//   });

// }
// function removeCard(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve('remove card');
//     }, 2000)
//   })
// }
// function thankYou(){
//   return new Promise((resolve,reject)=>{
//     console.log('thank you');
//   })
// }

// enterToAtm().then((Response)=>{
//   console.log(Response)
//   return wellcome()
// }).then((Response)=>{
//   console.log(Response)
//   return punchingCard()
// }).then((Response)=>{
//   console.log(Response)
//   return enterPin()
// }).then((Response)=>{
//   console.log(Response)
//   return processing()
// }).then((Response)=>{
//   console.log(Response)
//     return collectCash()
// }).then((Response)=>{
//   console.log(Response)
//   return removeCard()
// }).then((Response)=>{
//   console.log(Response)
//   return thankYou()
// }).then((Response)=>{
//   console.log(Response)
// })


// async function result(){
//   console.log(await enterToAtm())
//   console.log(await wellcome())
//   console.log(await punchingCard())
//   console.log(await enterPin())
//   console.log(await processing())
//   console.log(await collectCash())
//   console.log(await removeCard())
//   console.log(await thankYou())

// }








let enterToAtm = new Promise((resolve, reject) => {
 resolve('enter to atm');
})
let wellcome = new Promise((resolve, reject) => {
  resolve('wellcome');
})
let punchingCard = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('punching card')
  }, 2000)
})
let enterPin = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('enter pin')
  }, 5000)
})
let processing = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('processing')
  }, 2000)
})
let collectCash = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject('cash not available')
  }, 2000)
})
let removeCard = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('remove card')
  }, 2000)
})
let thankYou = new Promise((resolve,reject)=>{
  resolve('thank you')
})

function result(){
  Promise.all([enterToAtm,wellcome,punchingCard,enterPin,processing,collectCash,removeCard,thankYou]).then((response)=>{
    console.log(response);
  }).catch((error)=>{
    console.log(error);
  })
}
result()