// const clicker = document.getElementById("clicker__counter");
// const cookie = document.getElementById("cookie");
//
// cookie.onclick = function () {
//     ++clicker.textContent;
//    if(clicker.textContent % 2 === 0) {
//        cookie.width = 200;
//    } else {
//        cookie.width = 240;
//    }
// };

const clicker = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");
let lastClickTime = Date.now();

cookie.onclick = function () {
     ++clicker.textContent;
    let currentTime = Date.now();
    let timeDiff = currentTime - lastClickTime;
    lastClickTime = currentTime;
    speed.textContent = (1 / timeDiff * 1000).toFixed(2);
    if(clicker.textContent % 2 === 0) {
        cookie.width = 200;
    } else {
        cookie.width = 220;
    }
 };





