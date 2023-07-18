function randomcolor(){
    const hex = "0123456789ABCDEF"
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
let startchanger;
const output = () => {
    document.body.style.backgroundColor = randomcolor();
    console.log(randomcolor());
}


start.addEventListener('click', function(){
    startchanger = setInterval(output, 1000)
})

stop.addEventListener('click', function(){
    clearInterval(startchanger);
})