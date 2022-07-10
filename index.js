// declare variables
const rock = document.querySelector(".rock")
const scissors = document.querySelector(".scissors")
const paper = document.querySelector(".paper");
const test = document.querySelector(".test");
const paBtn = document.querySelector(".paBtn");
const resultText = document.querySelector(".result-text");
const paCard = document.querySelector(".play-again")
const header = document.querySelector(".header")

let elem = ["Rock","Paper","Scissors"]
let player;
let computer;

// click events
rock.addEventListener("click" , () =>{
    player = elem[0]
    computer = computerChoice();
    result(player,computer)
    unSelect(elem,player,computer)
    
})

paper.addEventListener("click" , () =>{
    player = elem[1]
    computer = computerChoice();
    result(player,computer)
    unSelect(elem,player,computer)
})

scissors.addEventListener("click" , () =>{
    player = elem[2]
    computer = computerChoice();
    result(player,computer)
    unSelect(elem,player,computer)
})

// computer choice with random module
function computerChoice(){
    computer = Math.floor(Math.random() * 3)
    return elem[computer];
}
// game result to determinte the winner of the game 
function result(pC,cC){
    if(pC == cC){
        draw();
    } else if (pC == "Rock" && cC =="Scissors"){
        playerWon()
    } else if (pC == "Rock" && cC == "Paper"){
        computerWin()
    } else if (pC == "Paper" && cC =="Scissors"){
        computerWin()
    } else if (pC == "Paper" && cC == "Rock"){
        playerWon()
    } else if (pC == "Scissors" && cC =="Rock"){
        computerWin()
    } else if (pC == "Scissors" && cC == "Paper"){
        playerWon()
    }
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    setInterval(() => {
        document.querySelector(".play-again").style.visibility = "visible"; 
    }, 1000);

}

// this functon find unselected element for css animation
function unSelect(arr,pla,comp){
    let newArr = []
    newArr = arr.filter(e => e != pla && e != comp)
    
    for (let i = 0; i < newArr.length; i++) {
        if(newArr[i] == "Rock"){
            rock.classList.add("unpicked")
        }
        if(newArr[i] == "Paper"){
            paper.classList.add("unpicked")
        }
        if(newArr[i] == "Scissors"){
            scissors.classList.add("unpicked")
        }
    }
}
//css styling and print game result 
function playerWon(){
    resultText.innerHTML = "You Win!";
    paCard.style.borderColor = "green"
    header.style.borderColor = "green"
    document.querySelector(".holder").style.backgroundColor = "green" 
    for (let i = 0; i < 3; i++) {
        document.querySelectorAll(".holder")[i].style.borderColor = "Green";
        document.querySelectorAll(".holder")[i].style.backgroundColor = "Green" 

    }
    
}
function computerWin(){
    resultText.innerHTML = "You Lose,Computer Win!";
    paCard.style.borderColor = "Red"
    header.style.borderColor = "Red"
    for (let i = 0; i < 3; i++) {
        document.querySelectorAll(".holder")[i].style.borderColor = "Red";
        document.querySelectorAll(".holder")[i].style.backgroundColor = "Red" 

    }
    
}
function draw(){
    resultText.innerHTML = "Draw!";
    for (let i = 0; i < 3; i++) {
        document.querySelectorAll(".holder")[i].style.borderColor = "white";
    }
    header.style.borderColor = "White"

}


// reload page for replay
paBtn.onclick =() => {
    location.reload();
}

 