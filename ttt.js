let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#new");
let mcontainer=document.querySelector(".mContainer");
let msg=document.querySelector("#msg");
let turn0= true;

const patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


const resetGame = () =>
    {
        turn0 = true;
        enable();
        mcontainer.classList.add("hide");
    }
boxes.forEach((box) =>{
    box.addEventListener("click",() =>
        {
            console.log("Box was clicked...");
            if(turn0)
                {
                    box.innerText="O";
                    turn0=false;
                }
                else{
                    box.innerText="X";
                    turn0=true;
                }
                box.disabled=true;

                checkWinner();
        }
);
}
);

const disable = () => 
    {
        for(let box of boxes)
            {
                box.disabled=true;
            }
    }

    const enable = () => 
        {
            for(let box of boxes)
                {
                    box.disabled=false;
                    box.innerText="";
                }
        }


const showWinner = (winner) =>
    {
        msg.innerText =`Congratulations, ${winner} is the winner`;
        mcontainer.classList.remove("hide");
        disable();
    }

const checkWinner = () =>{
    for (let pattern of patterns)
        {
            let pos0=boxes[pattern[0]].innerText;
            let pos1=boxes[pattern[1]].innerText;
            let pos2=boxes[pattern[2]].innerText;

            if(pos0!="" || pos1!="" || pos2!="")
                {
                    if(pos0 == pos1 && pos1 == pos2)
                        {
                            showWinner(pos1);
                        }
                }
        }
}


newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);