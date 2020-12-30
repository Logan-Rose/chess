class Board{
    constructor(w,h){
        this.gameBoard= []
        this.activeTile = []
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
        if(this.activeTile.length >0){
            this.gameBoard[this.activeTile[0]][this.activeTile[1]].deactivateTile();
            this.activeTile = []
        } else{
            this.activeTile=[y,x]
            this.gameBoard[y][x].activateTile()
        }
        this.gameBoard[y][x].draw()
        console.log(this.activeTile)
    }

    squareAt(y,x){
        return this.gameBoard[y][x]
    }

    drawBoard(){
        for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                this.gameBoard[i][j].draw();
            }
        }
        ctx.save()
    }
    drawPieces(){
        for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                if(this.gameBoard[i][j].isOccupied()){
                    this.gameBoard[i][j].drawPiece();
                }
                if(this.activeTile.length > 0){
                    this.gameBoard[this.activeTile[0]][this.activeTile[1]].highlight();
                    let available = this.gameBoard[this.activeTile[0]][this.activeTile[1]].getPiece().getAvailable()
                    console.log("bitch:", available)
                    for(let i =0; i< available.length;i++){
                        console.log(available[i][0])
                        
                        this.gameBoard[available[i][0]][available[i][1]].highlight();
                    }
                }
            }
        }
    }


    setBoard(){
        for(let i = 0; i < 8; i++){
            this.gameBoard[6][i].setPiece(new Pawn("white", 6, i))
        } 
      this.gameBoard[7][2].setPiece(new Knight("white", 7, 2))
      this.gameBoard[7][5].setPiece(new Knight("white", 7, 5))
    }

    movePiece(oldx,oldy,newx,newy){
        this.gameBoard[newy][newx].setPiece(this.gameBoard[oldy][oldx].getPiece())
        this.gameBoard[oldy][oldx].removePiece();
        this.gameBoard[oldy][oldx].deactivateTile();
        this.gameBoard[newy][newx].deactivateTile();
    }
}
