let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset_button");
let newbtn = document.querySelector(".new_button");
let msgcontainer = document.querySelector(".wincontainer");
let msg = document.querySelector(".msg");

const resetgame = () =>{
   turn = true;
   enableboxes();
   msgcontainer.classList.add("hide");
}
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let turn = true; 

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turn)
        {
            box.innerText = "0";
            box.classList.add("red");
            box.classList.remove("blue");

            turn=false;
        }        
        else
        {
            box.innerText="X";
            box.classList.add("blue");
            box.classList.remove("red");
            turn=true;
        }
        box.disabled = true;
    
        checkwinner();
    })
})
    const disableboxes = () => {
     for( let box of boxes)
    {
     box.disabled = true;
    }
    }

    const enableboxes = () => {
    for( let box of boxes)
    {
    box.disabled = false;
    box.innerText = "";
    }
    }

    const declareWinner = (winner) => {
        msgcontainer.classList.remove("hide");    
        msg.innerText = "Congratulations,winner is " + winner;
        disableboxes();
    };
    
    const checkwinner = () =>{
     for ( let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 == "" && pos2 == "" && pos3 == "")
        {
            console.log("wait");
        } 
        else{
            if(pos1 === pos2 && pos2 === pos3)
            {
                console.log("winner");
                declareWinner(pos1);
            }
        }
    }
    }
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);