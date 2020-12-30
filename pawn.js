class Pawn extends Piece{
    constructor(color, x,y){
        super(color,x,y);

        if(color == "white"){
            this.direction = -1
        } else{
            this.direction = 1
        }

        this.available = [
            [this.x + 2*this.direction,this.y],
            [this.x-1*this.direction,this.y]
        ]
        this.confirmAvailable()
        this.moved = false
        this.image = new Image();
        this.image.src = 'pawn.png';

    }
    updateAvailable(){
        if(this.moved == false){
            this.available = [
                [this.x + 2*this.direction,this.y],
                [this.x + 1*this.direction,this.y]
            ]
            this.moved = true
        } else{
            this.available = [
                [this.x + 1*this.direction,this.y],
            ]
        }
        this.confirmAvailable()
        console.log(this.available)
    }


}
