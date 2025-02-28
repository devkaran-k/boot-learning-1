function randomColor() {
  const colorPalate = "0123456789ABCDEF";

  let hash = "#";
  for (let i = 0; i < 6; i++) {
    const random = parseInt(Math.random() * 16);
    hash += colorPalate[random];
  }
  return hash;
}

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
    console.log(randomColor());

    document.getElementsByTagName("h1")[0].style.color = randomColor();

    
  }
};

const stopChangingColor = function () {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
