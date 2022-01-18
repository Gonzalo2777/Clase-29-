class Canon{
    constructor(x, y, width, heigth, angle){
    this.x = x;
    this.y = y; 

    this.width = width;
    this.heigth = heigth;
    this.angle = angle;
    }
    display(){
        console.log(this.angle);
        if(keyIsDown(RIGHT_ARROW) && this.angle < 0.034){
            this.angle += 0.02;  
        }
           
        if(keyIsDown(LEFT_ARROW) && this.angle > -0.85){
            this.angle -= 0.02;  
        }
        fill("gray");
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        rect(-10, -20, this.width, this.heigth);
        pop();
        arc(this.x -40, this.y +80, 180, 230);
          
        
    }
} 

