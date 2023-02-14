let images = [
    {
        img: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg',
        id : 1,
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
        id: 2,
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg',
        id: 3,
    }
]

let img = document.querySelector('img');
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let p = document.querySelector('p')

let count = 0;
function showImage(){
 img.src = images[count].img;

}
showImage();

setInterval(()=>{
    count++;
    p.innerText = count
    if(count > images.length - 1) {
        count = 0
    }
    showImage()
}, 2000)
// nextBtn.addEventListener('click', (event)=>{
//     count++;
//     p.innerText = count
//     // img.src = images[count].img
//     if(count > images.length - 1) {
//         count = 0
//     }
//     showImage()
// });

// prevBtn.addEventListener('click', (event)=>{
//     count--;
//     p.innerText = count
//     if(count < 0) {
//         count = images.length - 1
//     }
//     showImage()
// })