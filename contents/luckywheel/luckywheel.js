// * VARIABLES
const wheelArea = document.getElementById("wheel");
const spinArea = document.getElementById("spin");
const spinBtn = document.getElementById("btn--wheel");
const speechBubble = document.getElementById("speech-bubble");
const closeTooltipBtn = speechBubble.querySelector(".close-button");
const infoBtn = document.querySelector(".header .info__open-btn");
const startTimerBtn = document.querySelector(".btn__start");
const menu = document.querySelector(".header .menu");
const menuCloseBtn = menu.querySelector(".menu__collapse-btn");
const flipCard = document.querySelector(".flip-card");
const timer = flipCard.querySelector(".timer");
const guidance = document.querySelector(".game .guidance");
const sliceName = guidance.querySelector(".slice-name");
let gameStatus = {
  card: "front",
  flipCount: 0,
  timerRunCount: 0,
  timerIsRunning: false,
};

/* HELPERS
   ----------------------------- */
const closeSpeechBubble = () => {
  speechBubble.classList.add("hidden");
};
const toggleMenu = () => {
  menu.classList.toggle("open");
};
const processTimer = () => {
  flipCard.classList.toggle("flipping");
  startTimerBtn.classList.toggle("hidden");
  if (gameStatus.card === "front") {
    gameStatus.card = "back";
    setTimeout(() => {
      timer.dataset.timer = "running";
      startTimerBtn.classList.add("hidden");
      if (gameStatus.timerRunCount > 0) {
        resetAnimation(timer);
      }
      gameStatus.timerIsRunning = true;
    }, 1000);
    setTimeout(() => {
      timer.dataset.timer = "stopped";
      gameStatus.timerIsRunning = false;
      gameStatus.timerRunCount += 1;
      startTimerBtn.innerText = "Spin again";
      startTimerBtn.classList.remove("hidden");
    }, 47000);
  } else if (gameStatus.card === "back" && !gameStatus.timerIsRunning) {
    guidance.classList.add("hidden");
  }
};
const resetAnimation = (elem) => {
  elem.style.animation = "none";
  elem.offsetHeight;
  elem.style.animation = null;
};
/* GLOBAL SETTINGS
   ----------------------------- */
closeTooltipBtn.addEventListener("click", closeSpeechBubble);
infoBtn.addEventListener("click", toggleMenu);
menuCloseBtn.addEventListener("click", toggleMenu);
startTimerBtn.addEventListener("click", processTimer);
/* || UTILITY FUNCTIONS */
/* Generate a random integer within a given range*/
const randomInt = (min = 0, max = 16) =>
  Math.round(Math.random() * (max - min) + min);
const spinDuration = randomInt(4, 9);
console.log(`Spin duration: ${spinDuration}s`);
/* Set up an array to store the 
numbering of slices, from 1 to 12 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function findElem(givenIndex, offset) {
  const subtract = givenIndex - offset;
  let cur;
  if (subtract >= 0) {
    cur = arr[subtract];
  } else {
    /* Given index less than offset means that we will need to continue to loop
  through the array backward */
    let count = Math.abs(subtract);
    console.log(count);
    for (var i = arr.length - 1; count > 0; i--) {
      cur = arr[i];
      count -= 1;
    }
  }
  return cur;
}
const getSliceName = (rotationDeg) => {
  /* For a given rotation degree, divide it by 360 to get the number of rotations. The remainder of this operation is the offset degree from the starting slice.
  For example, if the rotation degree is 2354, then 2354 / 360 = 6 rotations. The remainder is 194, which means the final slice being pointed to is 194 degree counter-clockwise from the starting slice.
  */
  const offsetDegreeFromOrigin = rotationDeg % 360;
  console.log(`offset degree: ${offsetDegreeFromOrigin}`);
  /* From the offset degree, divide it by 30degree to get the estimated number of slices we have to travel. It is 6 in this example.
   */
  let offsetSlices = Math.floor(offsetDegreeFromOrigin / 30);
  console.log(`division of offset degree by 30 is ${offsetSlices}`);
  /* Get the remainder from the operator above. Initially, the marker points
at the center of a slice. Hence the
spin would need to move 16deg to get to the next element. If it moves 15deg and below, the marker still points to the original slice.
In our example above, the remainder is 14, which means we still stay at the 6th slice from the original slice.
  */
  const remain = offsetDegreeFromOrigin % 30;
  if (remain > 15) {
    offsetSlices = offsetSlices + 1;
  }
  console.log(`current slice is ${offsetSlices} slice from the starting slice`);
  const finalSliceOrder = findElem(3, offsetSlices);
  console.log(finalSliceOrder);
  const selector = `.slice__container[data-order="${finalSliceOrder}"]`;
  const finalSlice = document.querySelector(
    `.slice__container[data-order="${finalSliceOrder}"]`
  );
  console.log(finalSlice);
  const name = finalSlice.querySelector(".text span").innerText;
  return name;
};
// * Select HTML elements

spinBtn.addEventListener("click", () => {
  const startingDeg = Number(spinArea.dataset.currDeg) || 500;
  const randDeg =
    startingDeg + Math.round(randomInt(10, 20) * 360 + randomInt(16, 316));
  console.log(`rotation degree: ${randDeg}`);
  wheelArea.classList.add("is-spinning");
  spinArea.style.transform = `rotate(${randDeg}deg)`;
  spinArea.style.transition = `transform ${spinDuration}s ease-out`;
  spinArea.dataset.currDeg = randDeg;
  setTimeout(() => {
    wheelArea.classList.remove("is-spinning");
    const result = getSliceName(randDeg);
    console.log(result);
    sliceName.innerText = result;
    guidance.classList.remove("hidden");
  }, spinDuration * 1000);
});
