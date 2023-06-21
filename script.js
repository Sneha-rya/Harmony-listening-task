console.log("Welcome to Spotify");
let audioElement = newAudio('songs/1.mp3');
let masterPlay = document.getElemementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Salam-e-Ishq", filepath: "song/Who-Says.mp3", coverpath: "covers/cover.jpg"},
    {songName: "Salam-e-Ishq", filepath: "song/Who-Says.mp3", coverpath: "covers/cover.jpg"},
    {songName: "Salam-e-Ishq", filepath: "song/ {songName", coverpath: "covers/cover.jpg"},
    {songName: "Salam-e-Ishq", filepath: "song/Who-Says.mp3", coverpath: "covers/cover.jpg"},
    {songName: "Salam-e-Ishq", filepath: "song/Who-Says.mp3", coverpath: "covers/cover.jpg"},
    {songName: "Salam-e-Ishq", filepath: "song/Who-Says.mp3", coverpath: "covers/cover.jpg"}
]

songItems.forEach((element, i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterplay.addEventListener('click', ()=>{
    if(audioElement.Element.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 1;
    }

})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.classList.add('click' , (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.classList.remove('fa-play-circle');
        e.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = 'songs/${songIndex+1}.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})
})

document.getElementsById('next').addWventListener('click', ()=>{
    if(songIndex>9){
        songIndex= 0
    }
    else{
        songIndex+= 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})

document.getElementsById('next').addWventListener('click', ()=>{
    if(songIndex<=0){
        songIndex= 0
    }
    else{
        songIndex-= 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
        audioElement.play();
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})





   

    
    



