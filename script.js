const gameContainer = document.getElementById("game");
const buttonContainer = document.getElementById('buttonContainer');

let cardOne = null;
let cardTwo = null;
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
    newDiv.innerText = color; // @TODO: REMOVE BEFORE COMMIT!!!
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  };
};

// TODO: Implement this function!
function handleCardClick(event) {
  console.log("you just clicked", event.target);
  cardTracker(event);
};

const cardTracker = (event) => {
  setCardColor(event);

  if(cardOne === null) {
    cardOne = event.target;
  } else if (cardOne !== event.target && cardTwo === null) {
    cardTwo = event.target;
    setTimeout(() => {
      checkCardMatch(cardOne , cardTwo);
    }, 1)
  }
};

const checkCardMatch = (cardOne, cardTwo) => {
  if(cardOne.className !== cardTwo.className){
    alert(`Didn't match this time! Try again :)`);
      cardOne.style.backgroundColor = null;
      cardTwo.style.backgroundColor = null;
  } else {
    increaseNumOfcardsRevealed();
    console.log(`numOfCardsRevealed: `, numOfCardsRevealed);
  };
  resetCards();
};

const resetCards = () => {
  cardOne = null;
  cardTwo = null;
};

const increaseNumOfcardsRevealed = () => {
  numOfCardsRevealed+=2;

  if(numOfCardsRevealed === COLORS.length) {
    winner();
    createResetButton();
  }
};

const winner = () => {
    setTimeout(() => {
      return alert(`You Won! Congrats!`);
    }, 1);
};

const createResetButton = () => {
  const resetBtn = document.createElement('button');
  resetBtn.innerText = 'Reset Game';
  resetBtn.setAttribute('type', 'submit');
  buttonContainer.append(resetBtn);

  resetBtn.addEventListener('click', (event) => {
    location.reload();
});
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
