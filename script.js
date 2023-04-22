const gameContainer = document.getElementById("game");

let cardOne = null;
let cardTwo = null;
let clicked = 0;
let numOfCardsRevealed = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  };
};

// TODO: Implement this function!
function handleCardClick(event) {
  console.log("you just clicked", event.target);
  if(numOfCardsRevealed === 10) {
    winner();
  } else {
    clicks();
    clickTracker(event);
  }
};

const clicks = () => {
  if(clicked >= 2){
    alert(`you have clicked ${clicked} times.`);
  };
  clicked++;
};

const clickTracker = (event) => {
  if(clicked === 1) {
    setCardColor(event);
    cardOne = event.target
    return;
  };

  if(clicked === 2) {
    setCardColor(event);
    cardTwo = event.target;
  };
  checkCardMatch(cardOne , cardTwo);
};

const checkCardMatch = (cardOne, cardTwo) => {
  if(cardOne.className !== cardTwo.className){
    cardOne.style.backgroundColor = null;
    cardTwo.style.backgroundColor = null;
  } else {
    increaseNumOfcardsRevealed();
    console.log(`numOfCardsRevealed: `, numOfCardsRevealed);
  };
  clicked = 0;
}

const increaseNumOfcardsRevealed = () => {
  numOfCardsRevealed+=2;
};

const winner = () => {
    return alert(`You Won! Congrats!`);
};

const setCardColor = (event) => {
  switch (event.target.className) {
    case 'green':
      event.target.style.backgroundColor = 'green';
      break;
    case 'orange':
      event.target.style.backgroundColor = 'orange';
      break;
    case 'purple':
      event.target.style.backgroundColor = 'purple';
      break;
    case 'blue':
      event.target.style.backgroundColor = 'blue';
      break;
    case 'red':
    event.target.style.backgroundColor = 'red';
    break;
    default:
      break;
  };
};

// when the DOM loads
createDivsForColors(shuffledColors);
