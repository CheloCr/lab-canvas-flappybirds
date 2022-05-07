window.onload = function() {
  // Siempre declarar las const o lets que utilizamos en este archivo
  const bg = new Background (canvas.width,canvas.height)
  const flappy = new Flappy (50,40,35,35)




  document.getElementById("start-button").onclick = function() {

    if(!requestId){
      startGame()
    }
  };

  function startGame() {
    console.log("si funciono")


    //Iniciar juego v0.0.01
    // updateGame()

    //iniciar juego v.0.0.2
    audio.play()
    requestId = requestAnimationFrame(updateGame)
  }


  //Funcion para terminar el juego
  function gameOver(){
    console.log('TE MORISTE MAY')
    
    ctx.drawImage(dead,400,400,100,100)
    audio.pause()
    requestId = undefined
  } 

  

  // Funcion para ganar el juego
  function winGame(){}



  // Funcion que es el motor del juego que lo actualiza constantemente
  function updateGame(){
    frames++

    ctx.clearRect(0,0,canvas.width,canvas.height) //--> Funcion para limpiar el canvas
    bg.draw()
    flappy.draw()

    generatePipes()
    drawPipes()


    ctx.font="40px Arial"
    ctx.fillText(`Points : ${points}`,canvas.width-200,100)

    //Vamos a terminar le juego si el flappy toca el fondo
    if(flappy.y + flappy.height > canvas.height){
      gameOver()
    }

    if(requestId){
    requestAnimationFrame(updateGame)
    }
  }



  //Generar y dibujar pies
  function generatePipes(){
    //limitar que el arreglo se llene de obstaculos
    if(! (frames % 160 === 0) ){
      return true
    }
    //Height randoom
    //Math.floor( Math.randoom()* (max * 0.60)) + 35
    const height = Math.floor(Math.random() * (canvas.height * 0.6)) + 35
    const pipe1 = new Pipe("top",canvas.width,0,height)
    const pipe2 = new Pipe("bottom",canvas.width,height + 120, canvas.height - 120 - height )
    pipes.push(pipe1,pipe2)





  }

  function drawPipes(){

    pipes.forEach((pipe,index_pipe) => {
      
      //splice para sacar del array los pipes que se salgan del canvas.
      if(pipe.x + pipe.width <= 0 ){

        points++
        pipes.splice(index_pipe,1)
      }
      

      pipe.draw()

      //Validamos si Flappy golpea contra un pipe

      if(flappy.collision(pipe)){
        gameOver()
      }
    });

  }




  addEventListener("keydown", (event) =>{
    event.preventDefault() //---> Con esto ya no se puede mover la pantalla con las teclas
    if(event.keyCode == 32){
      flappy.userPull = 0.7
    }
  })

  addEventListener("keyup",(event) => {
    event.preventDefault()
    if(event.keyCode == 32){
      flappy.userPull = 0
    }
  })

};
