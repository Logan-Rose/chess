let canvasBoard = document.getElementById('canvasBoard');
let ctx = canvasBoard.getContext('2d');
let styles = getComputedStyle(canvasBoard),
w = parseInt(styles.getPropertyValue("width"), 10),
h = parseInt(styles.getPropertyValue("height"), 10);
console.log(w)
let frame;
let WIDTH = w;
let HEIGHT = h;
let mouseDown = false;
let changed = true

canvasBoard.width = WIDTH;
canvasBoard.height = HEIGHT;


let newBoard = new Board(8,8)
newBoard.setBoard();

//helper functions
function onBoard(mouse, rect){
    return ((mouse.clientX > rect.left)&&(mouse.clientX  < rect.right)) && ((mouse.clientY > rect.top)&&(mouse.clientY < rect.bottom))
}
//mouse listeners

window.addEventListener('mousemove',
    function(mouse){
        let rect = canvasBoard.getBoundingClientRect();

        if (onBoard(mouse, rect)){
            let mousePosX = mouse.clientX - rect.x
            let mousePosY = mouse.clientY - rect.top
            let xCell = (mousePosX - (mousePosX%100))/100
            let yCell = (mousePosY - (mousePosY%100))/100
        }

    }
)
let selectedxCell = -1
let selectedyCell = -1
window.addEventListener('mousedown',
    function(mouse){
        var rect = canvasBoard.getBoundingClientRect();
        mouseDown = true
        if(onBoard(mouse,rect)){
            let mousePosX = mouse.clientX - rect.x
            let mousePosY = mouse.clientY - rect.top
            let xCell = (mousePosX - (mousePosX%100))/100
            let yCell = (mousePosY - (mousePosY%100))/100
            console.log(yCell, xCell)

            if(hasChosenCell() && !(selectedxCell == xCell && selectedyCell == yCell ) ){
                console.log(selectedxCell, xCell)
                newBoard.movePiece(selectedxCell,selectedyCell,xCell,yCell)
                newBoard.activate(selectedyCell,selectedxCell)
                selectedxCell = -1
                selectedyCell = -1
            }else if(selectedxCell == xCell && selectedyCell == yCell){
                console.log("fuuuck")
                newBoard.activate(yCell,xCell)
                selectedxCell = -1
                selectedyCell = -1
            } else if(newBoard.squareAt(yCell,xCell).isOccupied()){
                newBoard.activate(yCell,xCell)
                selectedxCell = xCell
                selectedyCell = yCell
            }
            
        }
    } 
);

function hasChosenCell(){
    return (selectedxCell != -1 && selectedyCell != -1);
}


function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,w,h);
    newBoard.drawBoard();
    newBoard.drawPieces();

}

animate();