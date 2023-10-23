const tebak = document.querySelector(".check");
const again = document.querySelector(".again");
const result = document.querySelector(".result");
const guess = document.querySelector(".guess");
const waktu = document.querySelector(".timer");

const randomNum = Math.floor(Math.random() * (100) + 1);
let time = 30;
const interval = setInterval(() => {
  time--;
  waktu.innerHTML = time + "s";
  tebak.addEventListener("click", () => {
    if (time > 0) {
      if (guess.value == randomNum) {
        result.style.color = "#33ff33";
        result.innerHTML = `Tebakan mu Benarr!!!`;
        waktu.innerHTML = ''
        clearInterval(interval)
      } else if (guess.value > randomNum + 3 && guess.value <= randomNum + 10) {
        result.innerHTML = "Ayo Semangat!!! Sudah mau dekat";
      } else if (guess.value < randomNum - 3 && guess.value >= randomNum - 10) {
        result.innerHTML = "Ayo Semangat!!! Sudah mau dekat";
      } else if (guess.value <= randomNum + 2 && guess.value > randomNum) {
        result.innerHTML = "Sedikit lagii...";
      } else if (guess.value >= randomNum - 2 && guess.value < randomNum) {
        result.innerHTML = "Sedikit lagii...";
      } else if (guess.value > randomNum + 10) {
        result.innerHTML = "Angka mu terlalu besar!!";
      } else if (guess.value < randomNum - 10) {
        result.innerHTML = "Angka mu terlalu kecil!!";
      }
    }
  });
    if (time == 0) {
      result.innerHTML = `GAME OVER!! Angka nya adalah ${randomNum}`;
      result.style.color = "red";
      clearInterval(interval);
    }
}, 1000);