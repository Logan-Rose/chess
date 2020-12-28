class Square{
    constructor(color, x, y){
        this.color = color
        this.x = x
        this.y = y
        this.active = false
        this.occupied = false
        this.piece = null
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.y*100,this.x*100, 100, 100);
        if (this.active){
            ctx.beginPath();
            ctx.arc(this.y*100+50,this.x*100+50,20,0,Math.PI*2, true);
            ctx.strokeStyle = "green";
            ctx.stroke();
            ctx.fillStyle = "green";
            ctx.fill();
            console.log("active")
        }
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
}