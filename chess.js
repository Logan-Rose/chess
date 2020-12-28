let canvasBoard = document.getElementById('canvasBoard');
let ctx = canvasBoard.getContext('2d');
let styles = getComputedStyle(canvasBoard),
w = parseInt(styles.getPropertyValue("width"), 10),
h = parseInt(styles.getPropertyValue("height"), 10);
let frame;
let WIDTH = w;
let HEIGHT = h;
let mouseDown = false;
let changed = true

canvasBoard.width = WIDTH;
canvasBoard.height = HEIGHT;


let newBoard = new Board(8,8)
newBoard.drawBoard();

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
            console.log(xCell,yCell)
        }

    }
)

window.addEventListener('mousedown',
    function(mouse){
        var rect = canvasBoard.getBoundingClientRect();
        mouseDown = true
        if(onBoard(mouse,rect)){
            let mousePosX = mouse.clientX - rect.x
            let mousePosY = mouse.clientY - rect.top
            let xCell = (mousePosX - (mousePosX%100))/100
            let yCell = (mousePosY - (mousePosY%100))/100
            console.log(xCell,yCell)
            newBoard.activate(yCell,xCell)
        }
    } 
)
