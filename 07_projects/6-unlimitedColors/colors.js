// Get random Color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    
    for (let i = 0; i < 6; i++) {
        color +=hex[Math.floor(Math.random() * 16)]
        console.log(color);
    }

    return color;
}

let intervalId;
const startChangeColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBg , 1000);
    }
    function changeBg(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangeColor = function(){
    clearInterval(intervalId);
    intervalId=null;

}
document.querySelector("#start").addEventListener("click" , startChangeColor);
document.querySelector("#stop").addEventListener("click" , stopChangeColor);
