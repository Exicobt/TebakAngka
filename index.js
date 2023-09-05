const tebak = document.querySelector(".check");
const again = document.querySelector(".again");
const result = document.querySelector(".result");
const guess = document.querySelector(".guess");
const waktu = document.querySelector(".timer")

const num = [];

for (let i = 1; i <= 100; i++) {
  num.push(i);
}

const randomNum = Math.floor(Math.random() * num.length);
const GETNum = num[randomNum];

console.log(GETNum);

tebak.addEventListener("click", () => {
  if (guess.value == GETNum) {
    result.style.color = "#33ff33";
    result.innerHTML = `Tebakan mu Benarr!!!`;
  } else if (guess.value > GETNum + 3 && guess.value <= GETNum + 10) {
    result.innerHTML = "Ayo Semangat!!! Sudah mau dekat";
  } else if (guess.value < GETNum - 3 && guess.value >= GETNum - 10) {
    result.innerHTML = "Ayo Semangat!!! Sudah mau dekat";
  } else if (guess.value <= GETNum + 2 && guess.value > GETNum) {
    result.innerHTML = "Sedikit lagii...";
  } else if (guess.value >= GETNum - 2 && guess.value < GETNum) {
    result.innerHTML = "Sedikit lagii...";
  } else if (guess.value > GETNum + 10) {
    result.innerHTML = "Angka mu terlalu besar!!";
  } else if (guess.value < GETNum - 10) {
    result.innerHTML = "Angka mu terlalu kecil!!";
  }
});

tebak.addEventListener("click", () => {
  if (guess.value == GETNum) {
    guess.value;
  } else {
    guess.value = "";
  }
});

function timer() {
    let time = 30
    const interval = setInterval(() => {
        time--
        waktu.innerHTML = time + 's'

        if (time === 0) {
            result.innerHTML = `GAME OVER!! Angka nya adalah ${GETNum}`;
            result.style.color = "red"
            clearInterval(interval)
        }
    }, 1000);   
}

timer()
