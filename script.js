import { ruswords } from './words.js';
console.log(ruswords);
// это масcив
let letters = []
let wordbutton=document.getElementById("wordbutton")
let nut = document.getElementById("nut")
let nastr=document.getElementById("nastr")
let single=document.getElementById("single")
let img = document.getElementById("img")
let wordinput = document.getElementById("putin")
let modal = document.getElementById("modal")
let wordmodal = document.getElementById("wordmodal")
let multi = document.getElementById("multi")
let mistakes = 0
let p = document.getElementById("p")
p.innerHTML="Вводи букву и нажимай проверить"
let shifr = document.getElementById("shifr")
let words = ["код", "шкаф", "мышка", "собака"]
words = ruswords
let secret = words[Math.floor(Math.random() * words.length)]
shifr.innerHTML = "*".repeat(secret.length)
let playerInput = document.getElementById
("playerInput")
playerInput.select()
let butto = document.getElementById("butto")
// for(let i=1000;i>899;i=i-10){
// console.log(i);            
// }
function newGame() {
    butto.disabled= false
    //шифр показывает столько звездочек,сколько буквв слове
    shifr.innerHTML = "*".repeat(secret.length)
    mistakes=0
    img.src = "hangman" + mistakes + ".png"
    //для удаления буквы в инпуте
    playerInput.value=""
    p.innerHTML="Вводи букву и нажимай проверить"
    letters=[] 
}
nastr.onclick = function (event) {
    event.preventDefault()
    modal.style.opacity=1
    modal.style.pointerEvents="auto"
}
wordmodal.onclick=function (event) {
    event.preventDefault()

}
wordbutton.onclick=function (event) {
    event.preventDefault()
    if (!putin.value=="") {    
        wordmodal.style.pointerEvents="none"
        wordmodal.style.opacity=0
        secret=wordinput.value
        newGame()
    }
}
single.onclick = function (event) {
    event.preventDefault()
    secret = words[Math.floor(Math.random() * words.length)]
    newGame()
} 
multi.onclick =function (event) {
    event.preventDefault()
    wordmodal.style.pointerEvents="auto"
    h1.innerHTML="Виселица.мультиплеер"
    wordmodal.style.opacity=1
}
modal.onclick =function () {
     modal.style.opacity=0
     modal.style.pointerEvents="none"
}

nut.onclick = function (event) {
    event.preventDefault()
    secret = words[Math.floor(Math.random() * words.length)]
    newGame()
}
butto.onclick = function (event) {
    playerInput.select()
    // эьо ннужно что страница не обновлялась
    event.preventDefault()
    //если летерс не включает в себя букву игрока
    if (!letters.includes(playerInput.value)) {
        letters.push(playerInput.value)
    }
    console.log(letters);
    console.log(playerInput.value);
    p.innerHTML = "Использованые буквы: "+letters
    // если секретное слово включает в себя букву игрока 
    if (secret.includes(playerInput.value)) {
        console.log("Yes");
        let newshifr=""
        // цикл для проверки букв
        for (let i = 0; i < secret.length; i++) {

            if (letters.includes(secret[i])) {
                console.log(secret[i]);
                newshifr=newshifr+secret[i]
            }
            else {
                console.log("_");
                newshifr=newshifr+"*"
            }
        }
        shifr.innerHTML=newshifr
        //в конце 
        if (!newshifr.includes("*")) {
        h1.innerHTML = "🎇✨🎉💓💖Ты победил🎇🎉✨"    
        }
    }
    else {
        console.log("No");
        mistakes++
        // он показывает картинку
        img.src = "hangman" + mistakes + ".png"


    }
    // это 6 попыток
    if (mistakes == 6) {
        h1.innerHTML = "Ты проиграл секретное слово было " + secret
        butto.disabled = true
    }
}

// //for(let i=2;i<18;i=i*2){
//     //console.log(i);
// //}
// //for(let i=10;i<20;i++){
//     //console.log("Парварда i");
// //}
// for(let i=3;i>-4;i=i-1){
//     console.log(i);
// }