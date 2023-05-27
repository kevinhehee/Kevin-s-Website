
// PLAY/PAUSE RAIN BACKGROUND BUTTON
// var video = document.getElementById("rainbackground");

// var btn = document.getElementById("myBtn");

// function PPbackground()
// {
//   if (video.paused)
//   {
//     video.play();
//     btn.innerHTML = "<img src = \"icons/pause.png\" width = \"40px\" height= \"40px\">";
//   }
//   else 
//   {
//     video.pause();
//     btn.innerHTML = "<img src=\"icons/play.png\" width=\"40px\" height=\"40x\">";
//   }
// }

// PLAY/PAUSE SONG BUTTON
var btn2 = document.getElementById("myBtn2");
var music = document.getElementById("musicplayer");

function MusicPlay()
{
  if (music.paused)
  {
    music.play();
    btn2.innerHTML = "<img src = \"icons/pause.png\" width = \"40px\" height= \"40px\" top = \"5px\" >";
  }
  else
  {
    music.pause();
    btn2.innerHTML = "<img src = \"icons/play.png\" width = \"40px\" height= \"40px\" top = \"5px\" >";
  }
}

// function ProjectsJump()
// {
//     if ()
// }