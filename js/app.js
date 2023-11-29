const images = [
    'players/player-1.png',
    'players/player-2.png',
    'players/player-3.png',
    'players/player-4.png',
    'players/player-5.png',
    'players/player-6.png'
]

let imgIndex = 0;
const imgEl = document.getElementById('images-slider');
setInterval( ()=>{
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgEl.setAttribute('src', imgUrl);
    imgIndex++
},1000)