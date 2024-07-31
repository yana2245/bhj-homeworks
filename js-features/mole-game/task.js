const holeGame = document.getElementsByClassName("hole-game");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");


function getHole(index) {
    return document.getElementById(`hole${index}`);
}



for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);

    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent++;
            if (dead.textContent == 10) {
                alert("Вы выиграли");
                dead.textContent = '0';
                lost.textContent = '0';
            }
        } else {
                lost.textContent++;
                if (lost.textContent == 5) {
                    alert("Вы проиграли");
                    dead.textContent = '0';
                    lost.textContent = '0';
                }
            }
        }
}

