class Piece{
    constructor(color, name, x,y){
        this.color = color
        this.name = name
        this.x = x
        this.y = y
        this.available = []
    }
    setX(val){
        this.x = val
    }
    setY(val){
        this.y = val
    }
}
