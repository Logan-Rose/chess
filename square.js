class Square{
    constructor(color, x, y){
        this.color = color
        this.x = x
        this.y = y
        this.active = false
        this.occupied = this.piece != null
        this.piece = null
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.y*100,this.x*100, 100, 100);
    }

    highlight(){
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.rect(this.y*100+4,this.x*100+4, 92,92);
            ctx.strokeStyle = "black";
            ctx.stroke();
    }

    drawPiece(){
        if (this.occupied){
            let tmp = this.piece
            this.piece.image.onload = function(){
                ctx.drawImage(tmp.image, tmp.y*100,tmp.x*100, 100, 100); 
            }
            ctx.drawImage(tmp.image, tmp.y*100,tmp.x*100, 100, 100); 
        }
    }
    getPiece(){
        return this.piece
    }

    activateTile(){
        this.active = true
    }
    deactivateTile(){
        this.active = false
    }
    isOccupied(){
        return this.occupied
    }

    setPiece(piece){
        this.occupied = true
        this.piece = piece
        this.piece.movePiece(this.y, this.x);
    }
    removePiece(){
        this.occupied = false
        this.piece = null
    }
}