class Pawn extends Piece{
    constructor(color, x,y){
        super(color,name,x,y)
        if(color == "white"){
            this.available = [
                [x-1,y],
                [x-2,y]
            ]
        } else{
            this.available = [
                [x+1,y],
                [x+2,y]
            ]

        }
        this.image = new Image();
        this.image.src = 'pawn.png'
    }
}
