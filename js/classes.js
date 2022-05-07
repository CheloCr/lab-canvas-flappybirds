// BACKGROUND

class Background {
    constructor(w,h){
        this.x = 0
        this.y = 0
        this.width = w
        this.height = h
        this.img = new Image()
        this.img.src = "images/bg.png"
    }

    // METHODS

    draw(){
        //Loop infinito para fondo
        if(this.x < -canvas.width){this.x = 0}
        this.x --


        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)

        //segunda imagen para fondo infinito
        ctx.drawImage(
            this.img,
            this.x + this.width,
            this.y,
            this.width,
            this.height)

    }

}

class Flappy {
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.img = new Image()
        this.img.src = "images/flappy.png"
        // cosas extras
        this.vy = 2 //--> gravedad que va a afectar en el eje Y
        this.userPull = 0 //--> cuanto poder le vamos a dar para levantarlo
    }

    //METHODS
    draw(){ //-------------->Pinta el Flappy
        //Validar gravedad
        this.vy = this.vy + (gravity - this.userPull)

        // Validar que no salga del canvas en eje y = 0
        if(this.y <= 0){
            this.userPull = 0
            this.y = 2
            this.vy = 2
        }

        // Modificar su gravedad en Y
        if(this.y + this.width < canvas.height){
            this.y += this.vy
        }

        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }

    collision(item){ //--> Esta funcion checa las colisiones que tiene nuestro flappy
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y

        )
    } 
}

class Pipe extends Flappy {
    constructor(pos,x,y,h){
        super(x,y,50,h)
        this.img.src =
        pos === "top" // condicion
        ?"images/obstacle_top.png"
        :"images/obstacle_bottom.png"
    }

    draw(){
        this.x -=2
        ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}