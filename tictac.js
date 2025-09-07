let currentPlayer="X"
let h2=document.querySelector("h2")


function handleClick(target){
    console.log(target.getAttribute("id"))
  
    
    target.innerHTML=currentPlayer
    winner[target.getAttribute("id")]=currentPlayer
    checkWinner()
    currentPlayer=(currentPlayer== "X" ?"O" :"X")
    console.log(winner); 
}

let winner=Array(9).fill(null)
console.log(winner);

function checkWinner(){
    if( winner[0]!=null && winner[0]==winner[1] && winner[1]==winner[2]||
        winner[3]!=null && winner[3]==winner[4] && winner[4]==winner[5]||
        winner[6]!=null && winner[6]==winner[7] && winner[7]==winner[8]||
        winner[0]!=null && winner[0]==winner[3] && winner[3]==winner[6]||
        winner[1]!=null && winner[1]==winner[4] && winner[4]==winner[7]||
        winner[2]!=null && winner[2]==winner[5] && winner[5]==winner[8]||
        winner[0]!=null && winner[0]==winner[4] && winner[4]==winner[8]||
        winner[2]!=null && winner[2]==winner[4] && winner[4]==winner[6]
    ){
       h2.innerHTML=(`${currentPlayer} is winner`);
        
       
    }
    
}





