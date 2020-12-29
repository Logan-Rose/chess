class Board{
    constructor(w,h){
        this.gameBoard= []
        this.activeTile = [-1,-1]
        for(let i=0;i<w;i++){
            this.gameBoard.push([])
        }
        for(let i=0;i<w;i++){
            for(let j=0;j<h;j++){
                if(i%2 != j%2){
                    this.gameBoard[i][j] = new Square("brown",i, j)
                } else{
                    this.gameBoard[i][j] = new Square("beige",i, j)
                }
            }
        }
    }
    activate(y,x){
        if (this.active){
            this.gameBoard[this.activeTile[0]][this.activeTile[1]].deactivateTile()
        }
        
        this.activeTile = [y,x]
        this.gameBoard[y][x].activateTile()
        this.gameBoard[y][x].draw()
        console.log(this.gameBoard)
    }

    drawBoard(){
        for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                this.gameBoard[i][j].draw();
            }
        }
    }

    setBoard(){
        for(let i = 0; i < 8; i++){
            this.gameBoard[6][i].setPiece(new Pawn("white", 6, i))
        } 
    }
}
