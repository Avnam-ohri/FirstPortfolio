const pupils = document.getElementsByClassName("pupil");
const pupilsArr = Array.from(pupils);

//Pupils
let pupilStartPoint = -5;
let pupilRange = 30;

// MOSUE X POSITION

let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0; //to put the value in range of 0-1
// let mouseXRange = mouseXEndPoint - mouseXStartPoint;
// the above range helps us define the area in which the movement will occur

//MOUSE Y POSITION
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

//function to add a event to the movement of mouse
const mouseMove = (Event) => {
  currentXPosition = Event.clientX;
  fracXValue = currentXPosition / mouseXEndPoint;

  currentYPosition = Event.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;

  let pupilXCurrentPosition = pupilStartPoint + fracXValue * pupilRange;
  let pupilYCurrentPosition = pupilStartPoint + fracYValue * pupilRange;

  pupilsArr.forEach((pupilsArr) => {
    pupilsArr.style.transform = `translate(${pupilXCurrentPosition}px, ${pupilYCurrentPosition}px)`;
  });
};

const windowResize = (Event) => {
  mouseXEndPoint = window.innerWidth;

  mouseYEndPoint = window.innerHeight;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}
// Email facility
