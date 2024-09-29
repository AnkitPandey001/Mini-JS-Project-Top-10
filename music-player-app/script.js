const songs = [
  {
    title: "Shiv Sama Rahe - Hansraj Raghuwanshi",
    file: "Shiv Sama Rahe - Hansraj Raghuwanshi.mp3",
    imgSrc:
      "https://imgs.search.brave.com/wIgKEWs9Kp3R2kru6hbWsW7io2OM0ABd7CIFPtVAEfU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZGliaGFqYW4u/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTIvU2hpdi1z/YW1hLXJhaGUtMS0x/LmpwZw",
  },
  {
    title: "Kya Karu",
    file: "new_192_Kya Karu - Millind Gaba.mp3",
    imgSrc:
      "https://imgs.search.brave.com/YmUm5RrVhf0NkQyHICweWFVzqc1p3aeEYczNCpA5YF0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/d3luay5pbi91bnNh/ZmUvMjQ4eDI0OC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTpzdHJp/cF9leGlmKCk6Zm9y/bWF0KHdlYnApL2h0/dHA6Ly9zMy1hcC1z/b3V0aC0xLmFtYXpv/bmF3cy5jb20vd3lu/ay1tdXNpYy1jbXMv/c3JjaF9odW5nYW1h/L211c2ljLzg5MDM0/MzE3ODk3NzgvMTYw/ODcyOTM3My9zcmNo/X2h1bmdhbWFfNTg4/ODgxNDkuanBn"
  },
  {
    title: "Teri Yaari - Millind Gaba",
    file: "new_192_Teri Yaari - Millind Gaba.mp3",
    imgSrc:"https://imgs.search.brave.com/W9El3US13TQeoGWNo9bCkWizOEwv6dYRvheMMJbDK5g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTJ6VURo/TlRqeUZhUnZBSjAt/M3kyQmFnLXQ1MDB4/NTAwLmpwZw"
    },

]

let currentSongIndex = 0;

const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const currentSongDisplay = document.getElementById("currentSong");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const songImage = document.getElementById("songImage");

function loadSong(songIndex) {
  const song = songs[songIndex];
  audioSource.src = song.file;
  audioPlayer.load();
  currentSongDisplay.innerText = `Now Playing: ${song.title}`;
  songImage.src = song.imgSrc;
}
loadSong(currentSongIndex);

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
});

prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
});
