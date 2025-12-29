const btn = document.getElementById("startBtn");
const content = document.getElementById("content");
const bgm = document.getElementById("bgm");

const text = `有些话平时不太好意思说，
但在今天，好像刚刚好。

这一年有开心，也有疲惫，
有争执，也有靠近。

谢谢你一直在我身边。
新的一年，
我还是想继续和你一起走。`;

let index = 0;

btn.addEventListener("click", () => {
  content.classList.remove("hidden");
  bgm.play();
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  typeWriter();
});

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}
