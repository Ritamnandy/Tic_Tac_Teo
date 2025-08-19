const cell = document.querySelectorAll('#tile');
// console.log(cell);
const turn = document.getElementById('display-player');
const result = document.getElementById('result');
const xwin = document.getElementById('xscore');
const owin = document.getElementById('yscore');
const reset = document.getElementById('reset');
let player = 'X';
let cells = ['','','','','','','','',''];
let gameactive = true;
let winx=0;
let wino=0;

cell.forEach( (item)=>{
    item.addEventListener('click',gameon);
})
function gameon(e){
    const index = e.target.dataset.index;
    if(cells[index]!=''||!gameactive)
    {
        return;
    }
    cells[index] = player;
    e.target.textContent = player;
    if(checkwin()){
        result.innerHTML = `${player} Wins! `;
        gameactive = false;
        if(player==='X'){
            winx++;
            xwin.innerHTML = winx;
        }else{
            wino++;
            owin.innerHTML = wino;
        }
        return;
    }
    if(!cells.includes('')){
        result.innerHTML =`It's a Draw`;
        gameactive = false;
        return;
    }
    player = player === 'X'?'O':'X';
    turn.innerHTML = player;
}

function checkwin(){
    const winpattern =[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    return winpattern.some(i =>{
        return i.every(j =>cells[j]=== player);
    });
}

reset.onclick = function(){
     cells = ['','','','','','','','',''];
     player = 'X';
     gameactive =true ;
    result.innerHTML = '';
    turn.innerHTML = player;
    cell.forEach(c => c.textContent = '');
}

turn.innerHTML = player;
