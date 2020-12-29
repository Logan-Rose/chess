class Knight extends Piece{
    constructor(color, x,y){
        super(color,name,x,y)
        this.available = [
            [y-2,x-1],
            [y-2,x+1],
            [y-1,x-2],
            [y-1,x+2],
            [y+1,x-2],
            [y+1,x+2],
            [y+2,x-1],
            [y+2,x+1]
        ]
        this.image = new Image();
        this.image.src = 'knight.png'
    }
}
