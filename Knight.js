class Knight extends Piece{
    constructor(color, x,y){
        super(color,x,y)
        this.available = [
            [x-2,y-1],
            [x-2,y+1],
            [x-1,y-2],
            [x-1,y+2],
            [x+1,y-2],
            [x+1,y+2],
            [x+2,y-1],
            [x+2,y+1]
        ]
        this.confirmAvailable();
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
    confirmAvailable(){
        for(let i =0; i < this.available.length;i++){
            if(this.available[i][0] > 7 || this.available[i][0] < 0 || this.available[i][1] > 7 || this.available[i][1] < 0){
                this.available.splice(i,1);
            }
        }
        console.log("confirmed:", this.available)
    }
}


