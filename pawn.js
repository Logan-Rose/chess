class Pawn extends Piece{
    constructor(color, x,y){
        super(color,name,x,y)
        if(color == "white"){
            this.available = [
                [y-1,x],
                [y-2,x]
            ]
        } else{
            this.available = [
                [y+1,x],
                [y+2,x]
            ]

        }
        this.image = new Image();
        this.image.src = 'pawn.png'
    }
}
