const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const moveClock = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  //90 is the initial angle set in the CSS
  const secondRotation = 90 + seconds * (360 / 60); //6 => 360/60, second hand roatates 360deg in 60 seconds
  const minuteRotation = 90 + minutes * (360 / 60); //6 => 360/60, minute hand rotates 360deg in 60 minutes
  const hourRotattion = 90 + hours * (360 / 12) + minutes * (360 / 12 / 60); //hour rotates 360/12 for 60 minutes within

  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
  hourHand.style.transform = `rotate(${hourRotattion}deg)`;
};

setInterval(moveClock, 1000); // 1sec = 1000 miliseconds
