class Knight extends Piece{
    constructor(color, x,y){
        super(color,x,y)
        this.updateAvailable()
        this.image = new Image();
        this.image.src = 'knight.png'
    }
    updateAvailable(){
        this.available = [
            [this.x-2,this.y-1],
            [this.x-2,this.y+1],
            [this.x-1,this.y-2],
            [this.x-1,this.y+2],
            [this.x+1,this.y-2],
            [this.x+1,this.y+2],
            [this.x+2,this.y-1],
            [this.x+2,this.y+1]
        ]
        this.confirmAvailable();
    }
}


