console.log("welcome to spotify");

let songIndex=1;
let audioelement = new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs =[
    {songname:"Aasmaan Ko Chukar",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songname:"Bedardeya",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songname:"Gasolina",filePath:"songs/3.mp3",coverPath:"covers/3.jpeg"},
    {songname:"Harshad Mehta Theme Song",filePath:"songs/4.mp3",coverPath:"covers/4.jpeg"},
    {songname:"Jaykaal Mahakaal",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songname:"Makeba",filePath:"songs/6.mp3",coverPath:"covers/6.jpeg"},
    {songname:"Malang Sajna",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songname:"Obsessed",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songname:"Rang Lageya",filePath:"songs/9.mp3",coverPath:"covers/9.webp"},
    {songname:"Tu Mile Dil Khile",filePath:"songs/10.mp3",coverPath:"covers/10.jpeg"},

    
]
songitems.forEach((element,i)=> {
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})
//play/pause my music
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime <= 0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to events
audioelement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioelement.currentTime / audioelement.duration) * 100);
    
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=(myprogressbar.value * audioelement.duration) / 100;
})

const makeAllplays=() =>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src=`songs/${songIndex}.mp3`;
        mastersongname.innerText=songs[songIndex - 1].songname;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 10){
        songIndex = 1;
    }else{
        songIndex += 1;
    }
    audioelement.src=`songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex - 1].songname;
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 1){
        songIndex = 1;
    }else{
        songIndex -= 1;
    }
    audioelement.src=`songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex - 1].songname;
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
