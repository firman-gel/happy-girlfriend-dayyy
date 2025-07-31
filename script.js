function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 300);

window.addEventListener("click", () => {
  const music = document.getElementById("bgmusic");
  music.muted = false;
  music.play();
}, { once: true });
