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

// 🔊 Autoplay musik di HP & Laptop
function playMusic() {
  const music = document.getElementById("bgmusic");
  if (music) {
    music.muted = false;
    music.play();
  }
}

// Tangkap klik dan sentuhan
window.addEventListener("click", playMusic, { once: true });
window.addEventListener("touchstart", playMusic, { once: true });
