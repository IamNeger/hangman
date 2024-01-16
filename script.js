import { ruswords } from './words.js';
console.log(ruswords);
let letters=[]
let img=document.getElementById("img")
let mistakes=0
let p=document.getElementById("p")
let shifr=document.getElementById("shifr")
let words=["код","шкаф","мышка","собака"]
words=ruswords
let secret=words[Math.floor(Math.random()*words.length)]
shifr.innerHTML="*".repeat(secret.length)
let playerInput=document.getElementById("playerInput")
let butto=document.getElementById("butto")
// for(let i=1000;i>899;i=i-10){
// console.log(i);            
// }
butto.onclick=function(event){
    event.preventDefault()
    if (!letters.includes(playerInput.value)) {
        letters.push(playerInput.value)
    }
    console.log(letters);
    console.log(playerInput.value);
    p.innerHTML=playerInput.value 
    if (secret.includes(playerInput.value)) {
        console.log("Yes");
        h1.innerHTML="Ты победил"
        for(let i=0;i<secret.length;i++){
            console.log(secret[i]);            
            }
    }
    else {
        console.log("No");
        mistakes++
        img.src="hangman"+mistakes+".png"
        

    }
    if (mistakes==6) {
        h1.innerHTML="Ты проиграл секретное слово было "+secret
        butto.disabled=true
    }
}

 