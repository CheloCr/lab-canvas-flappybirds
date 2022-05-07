// ESTE ES UN ARCIVO PARA LAS VARIABLES QUE UTILIZAN MI VIDEJUEGO
// DE PREFERENCIA DECLARAMOS AQUI EL CANVAS Y SU CONTEXTO

const canvas = document.getElementById("my-canvas")
const ctx = canvas.getContext("2d")



// ----- Variables globales ------ //

let frames = 0
const gravity = 0.1 //--> es constante porque nunca va a cambair.
const pipes = [] //---> Aqui se van a ir guardando los tubos que van a ir saliend. 
let points = 0 // --> Score para saber cuantos puntos vamos teniendo. 


// EXTRAS
let dificultad = 1 

let requestId; //--> Esta variable nos va a servir para detener el juego. 

// AUDIO
const audio = new Audio()
audio.src = "/audio/drama.mp3"
audio.loop = true// ----> Esto hace que el audio se este reproduciendo continuamente.

const dead = new Image()
    dead.src = "https://w7.pngwing.com/pngs/359/749/png-transparent-death-certificate-sword-art-online-gamebanana-died-text-rectangle-logo.png"

// Si se quiere resetear al personaje

let cheloDefault = {
    vidas:3,
    status:"pequeno",
    monedas:0,
    x:100,
    y:10
}



