const messages = [
  "Aku tahu hari ini mungkin nggak berjalan sesuai harapan kamu,",
  "Istirahat dulu, tarik napas pelan-pelan. ✨",
  "Besok pasti akan lebih baik, aku yakin kamu bisa lewatin ini. 🍀",
];

const typingElement = document.getElementById("typing-text");
let messageIndex = 0;
let charIndex = 0;

function typeLine() {
  if (messageIndex < messages.length) {
    const currentMessage = messages[messageIndex];
    if (charIndex < currentMessage.length) {
      typingElement.textContent += currentMessage.charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      typingElement.textContent += '\n\n';
      charIndex = 0;
      messageIndex++;
      setTimeout(typeLine, 1000);
    }
  }
}

typeLine();

// Musik
const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");

toggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggle.textContent = "⏸️ Pause";
  } else {
    music.pause();
    toggle.textContent = "🎵 Play";
  }
});

// Autoplay saat klik pertama
document.body.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });
