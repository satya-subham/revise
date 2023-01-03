// let userInput = document.querySelector("#username");
// let userEmail = document.querySelector("#userEmail");
// let userPassword = document.querySelector("#userPass");
// let submitBtn = document.querySelector("#submit");
// let table = document.querySelector("#table");

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(userInput.value, userEmail.value, userPassword.value);
//   table.innerHTML += `<tr class="newrow">
//        <td>${userInput.value}</td>
//        <td>${userEmail.value}</td>
//        <td>${userPassword.value}</td>
//        <td><button class="dltbtn">Delete</button></td>
//     </tr>`;

//   let dltBtn = document.querySelectorAll(".dltbtn");
//   let tableRow = document.querySelectorAll(".newrow");

//   let x = Array.from(dltBtn)
//   let y = Array.from(tableRow)
//   x.forEach((btn)=>{
//     btn.addEventListener("click", (e)=>{
//         e.target.parentElement.parentElement.remove();
//     })
//   })
// });
























let value = document.getElementById('value');
let incrementButton = document.getElementById('increment');
let decrementButton = document.getElementById('decrement')
let count = 0

// counter

// incrementButton.addEventListener('click', (event)=>{
//   count++;
//   value.textContent = count;
// })
// decrementButton.addEventListener('click', (event)=>{
//   count--;
//   value.textContent = count;
// })







// stop watch

let interval ;
function fun(){
  value.innerText = parseInt(value.innerText)+1
}

incrementButton.addEventListener('click', (event)=>{
 interval = setInterval(fun, 1000);
})
decrementButton.addEventListener('click', (event)=>{
  clearInterval(interval)
})

























//=========================================================================


// let userInput = document.querySelector("#username");
// let userEmail = document.querySelector("#userEmail");
// let userPassword = document.querySelector("#userPass");
// let submitBtn = document.querySelector("#submit");
// let table = document.querySelector("#table");

// submitBtn.addEventListener("click", (e) => {
//     let tableRow = document.createElement('tr')
// })