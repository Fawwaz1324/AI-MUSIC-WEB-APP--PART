hp_song ="";
pp_song ="";

function preload()
{
    hp_song = loadSound("music.mp3");
    pp_song = loadSong("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    hp_song.play();
}