const rock = document.querySelector(".rock")
const scissors = document.querySelector(".scissors")
const paper = document.querySelector(".paper")
const test = document.querySelector(".test")

const elem = ["Rock","Paper","Scissors"]
let player;
let computer;


rock.addEventListener("click" , () =>{
    player = elem[0]
    computer = computerChoice();
    result(player,computer)
})

paper.addEventListener("click" , () =>{
    player = elem[0]
    computer = computerChoice();
    result(player,computer)
})

scissors.addEventListener("click" , () =>{
    player = elem[0]
    computer = computerChoice();
    result(player,computer)
})


function computerChoice(){
    computer = Math.floor(Math.random() * 3)
    return elem[computer]
}

function result(pC,cC){
    if(pC == cC){
        console.log("draw")
    } else if (pC == elem[0] && cC == elem[2]){
        console.log("Player Won!")
    }
}