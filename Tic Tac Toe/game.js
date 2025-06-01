let boxes= document.querySelectorAll(".box");
let resets=document.querySelector(".reset");
let newgame=document.querySelector(".new");
let container=document.querySelector(".msg");
let msg=document.querySelector("#m");

let turn_O=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2],
]
boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
    if (turn_O) {
        box.innerText="O";
        turn_O= false;
    }else {
        box.innerText="X";
        turn_O= true;
    }
    box.disabled=true;

    Winner();
    });
});
const disableBox = () =>{
    for(let box of boxes){
        box.disabled= true;
    }
};
const enableBox = () =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
};
const show = (winners) =>{
    msg.innerText = "Congratulaion, Winner is player "+ winners;
    container.classList.remove("hide");
    disableBox();
};

const Winner = () =>{
    for(let pattern of win){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        
        if(pos1val !="" && pos2val !="" && pos3val!=""){
            if(pos1val=== pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                show(pos1val);
            }
        }
    }
};

const resetGame=() =>{
    trueO= true;
    enableBox();
    container.classList.add("hide");
};
newgame.addEventListener("click" , resetGame) ;
resets.addEventListener("click" , resetGame) ;