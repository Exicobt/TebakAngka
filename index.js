const tebak = document.querySelector(".check");
const again = document.querySelector(".again");
const result = document.querySelector(".result");
const guess = document.querySelector(".guess");

const num = [];

for (let i = 1; i <= 100; i++) {
  num.push(i);
}

const randomNum = Math.floor(Math.random() * num.length);
const GETNum = num[randomNum];

console.log(GETNum)

tebak.addEventListener("click", () => {
  if (guess.value == GETNum) {
    result.style.color = "#33ff33";
    result.innerHTML = `Tebakanmu Benarr!!!`;
  } else if (guess.value > GETNum + 3 && guess.value <= GETNum + 10) {
    result.innerHTML = "Ayo Semangat!!! Sudah mau dekat";
  } else if (guess.value < GETNum - 3 && guess.value >= GETNum - 10) {
    result.innerHTML = "Ayo Semangat!!! Sudah mau dekat";
  } else if (guess.value <= GETNum + 2 && guess.value > GETNum) {
    result.innerHTML = "Sedikit lagii...";
  } else if (guess.value >= GETNum - 2 && guess.value < GETNum) {
    result.innerHTML = "Sedikit lagii...";
  } else {
    result.innerHTML = "Angka mu terlalu jauh!!"
  }
});

tebak.addEventListener("click", () => {
  if (guess.value == GETNum) {
    guess.value
  } else {
    guess.value = "";
  }
});
