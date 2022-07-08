const rock = document.querySelector(".rock")
const scissors = document.querySelector(".scissors")
const paper = document.querySelector(".paper")
const test = document.querySelector(".test")

let elem = ["Rock","Paper","Scissors"]
let player;
let computer;


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


function computerChoice(){
    computer = Math.floor(Math.random() * 3)
    return elem[computer];
}

function result(pC,cC){
    if(pC == cC){
        console.log("draw")
    } else if (pC == elem[0] && cC == elem[2]){
        console.log("Player Won!")
    }
}


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
