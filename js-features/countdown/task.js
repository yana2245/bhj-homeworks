//
// const status = document.getElementById("timer");
// const reduce = function () {
//     status.textContent -= 1;
//     if (status.textContent == 0) {
//         alert("Вы победили в конкурсе!");
//         clearInterval(timers);
//     }
// };
//
// const timers = setInterval(reduce, 1000);

const status = document.getElementById("timer");
const download = "https://img1.akspic.ru/attachments/crops/1/4/9/1/3/131941/131941-banff-park-pustynya-nacionalnyj_park-gornyj_relef-2560x1440.jpg"

const reduce = function() {
    status.textContent -= 1;
    if (status.textContent == 0) {
        window.location = download;
        clearInterval(timers);
    }
}
const timers = setInterval(reduce, 1000);