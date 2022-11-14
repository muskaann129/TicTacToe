let gameOver = false;
// ==================*Adding sound on clicks on box*====================
let numberOfBox = document.querySelectorAll(".box").length;

for (let i = 0; i < numberOfBox; i++) {

    document.querySelectorAll(".box")[i].addEventListener("click", function () {
        let music = new Audio("Music/tap.wav");
        music.play();
    });
}

// ======================*function to change the turn*======================
let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// ===================*Checking winner*=================

const checkWin = () =>{
    let boxValue = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxValue[e[0]].innerHTML === boxValue[e[1]].innerHTML) && (boxValue[e[1]].innerHTML === boxValue[e[2]].innerHTML) && (boxValue[e[0]].innerHTML !== "") ){
            document.querySelector(".info").innerHTML = boxValue[e[0]].innerHTML + " wins!";
            document.querySelector(".gif").style.opacity = '1';
            gameOver = true;
        }
    })
}

// ===============*Game logic*===================
for (let j = 0; j < numberOfBox; j++) {
    document.querySelectorAll(".box")[j].addEventListener("click", function () {
        document.querySelectorAll(".boxText")[j].innerHTML = turn;
        turn = changeTurn();
        document.querySelector(".info").innerHTML = turn + " will play";
        checkWin();
    });
}


// ===============*reset button*====================
const resetRef = document.getElementById("reset")
resetRef.addEventListener('click', () => {
    for (let j = 0; j < numberOfBox; j++) {
        document.querySelectorAll(".boxText")[j].innerHTML = "";
    }
    document.querySelector(".gif").style.opacity = '0';
    turn = "X";
    document.querySelector(".info").innerHTML = turn + " will play";
})