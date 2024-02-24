function generateColor(){
    let red = Math.floor((Math.random()*255));
    let green = Math.floor((Math.random()*255));
    let blue = Math.floor((Math.random()*255));
    let color = `rgb(${red},${green},${blue})`;
    return color;
}
const body = document.body;
const stopButton = document.querySelector(".stop");
const startButton = document.querySelector(".start");

startButton.addEventListener('click',function(){
    const id = setInterval(()=>{
        body.style.backgroundColor = generateColor();
    },1000);
    stopButton.addEventListener('click',function(){
        clearInterval(id);
    })
})



