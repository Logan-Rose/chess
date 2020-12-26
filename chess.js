let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let styles = getComputedStyle(canvas),
w = parseInt(styles.getPropertyValue("width"), 10),
h = parseInt(styles.getPropertyValue("height"), 10);
let frame;
let WIDTH = w;
let HEIGHT = h;
let mouseDown = false;
let changed = true

canvas.width = WIDTH;
canvas.height = HEIGHT;





class square{
    constructor(color, x, y){
        this.color = color
        this.x = x
        this.y = y
        this.active = false
    }
    draw(){
        if (this.active){
            context.fillStyle = "green";
        } else{
            context.fillStyle = this.color;
        }
        context.fillRect(this.y*100,this.x*100, 100, 100);
        
    }
    activate(){
        this.active = true
    }
}

//drawing board
let board= []
for(i=0;i<8;i++){
    board.push([])
}
for(i=0;i<8;i++){
    for(j=0;j<8;j++){
        if(i%2 != j%2){
            board[i][j] = new square("brown",i, j)
        } else{
            board[i][j] = new square("beige",i, j)
        }
    }
}
for(i=0;i<8;i++){
    for(j=0;j<8;j++){
        board[i][j].draw();
    }
}
console.log(board)

function onBoard(mouse, rect){
     return ((mouse.clientX > rect.left)&&(mouse.clientX  < rect.right)) && ((mouse.clientY > rect.top)&&(mouse.clientY < rect.bottom))
}

//mouse listeners
window.addEventListener('mousemove',
    function(mouse){
        let rect = canvas.getBoundingClientRect();

        if (onBoard(mouse, rect)){
            let mousePosX = mouse.clientX - rect.x
            let mousePosY = mouse.clientY - rect.top
            let xCell = (mousePosX - (mousePosX%100))/100
            let yCell = (mousePosY - (mousePosY%100))/100
            console.log(xCell,yCell)
        } else{
            console.log("fuck")
        }

    }
)

window.addEventListener('mousedown',
    function(mouse){
        var rect = canvas.getBoundingClientRect();
        mouseDown = true
        if(onBoard(mouse,rect)){
            let mousePosX = mouse.clientX - rect.x
            let mousePosY = mouse.clientY - rect.top
            let xCell = (mousePosX - (mousePosX%100))/100
            let yCell = (mousePosY - (mousePosY%100))/100
            console.log(xCell,yCell)
            board[yCell][xCell].activate()
            board[yCell][xCell].draw()
        }
    } 
)