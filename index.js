const rock = document.querySelector(".rock")
const scissors = document.querySelector(".scissors")
const paper = document.querySelector(".paper");
const test = document.querySelector(".test");
const paBtn = document.querySelector(".paBtn");
const resultText = document.querySelector(".result-text");

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
        resultText.innerHTML = "Draw";
    } else if (pC == "Rock" && cC =="Scissors"){
        resultText.innerHTML = "Player Won!";
    } else if (pC == "Rock" && cC == "Paper"){
        resultText.innerHTML = "Computer Won!";
    } else if (pC == "Paper" && cC =="Scissors"){
        resultText.innerHTML = "Computer Won!";
    } else if (pC == "Paper" && cC == "Rock"){
        resultText.innerHTML = "Player Won!";
    } else if (pC == "Scissors" && cC =="Rock"){
        resultText.innerHTML = "Computer Won!";
    } else if (pC == "Scissors" && cC == "Paper"){
        resultText.innerHTML = "Player Won!";
    }
    setInterval(() => {
        document.querySelector(".play-again").style.visibility = "visible"; 
    }, 1000);
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
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

paBtn.onclick =() => {
    location.reload();
}

 