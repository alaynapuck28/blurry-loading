let loadingText = document.querySelector(".loading-text");
let bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  loadingText.innerHTML = `${load}%`;
  loadingText.style.opacity = scale(load, 100, 0, 0, 1);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  if (load > 99) {
    clearInterval(int);
  }
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
