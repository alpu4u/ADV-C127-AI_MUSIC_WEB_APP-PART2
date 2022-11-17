song1='';
song2='';

function preload()
{
    song1=loadSound("Who_Let_The_Dogs_Out.mp3");
    song2=loadSound("We_Will_Rock_You.mp3");
}

function playSong()
{
    song1.play();
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}
