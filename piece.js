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
    movePiece(y,x){
        this.y = y;
        this.x = x;
        this.updateAvailable();
    }
    updateAvailable(){};

    getAvailable(){
        this.confirmAvailable()
        return this.available
    }

    confirmAvailable(){
        for(let i =0; i < this.available.length;i++){
            if(this.available[i][0] > 7 || this.available[i][0] < 0 || this.available[i][1] > 7 || this.available[i][1] < 0){
                this.available.splice(i,1);
            }
        }
        console.log("confirmed:", this.available)
    }
}
