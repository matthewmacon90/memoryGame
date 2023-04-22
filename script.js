const gameContainer = document.getElementById("game");

let cardOne = null;
let cardTwo = null;

//Moving this into a function
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

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  };
};

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  clicks();
  checkCardMatch(event);
};


// I would like to get this function to work in tracking my clicks.
const clicks = () => {
  if(clicked >= 2){
    alert(`you have clicked ${clicked} times.`);
  };
  clicked++;
};

const checkCardMatch = (event) => {
  if(clicked === 1) {
    setCardColor(event);
    cardOne = event.target
    return;
  };

  if(clicked === 2) {
    setCardColor(event);
    cardTwo = event.target;
  };

  if(cardOne.className !== cardTwo.className){
    cardOne.style.backgroundColor = null;
    cardTwo.style.backgroundColor = null;
  } else {
    cardsRevealed();
    console.log(`numOfCardsRevealed: `, numOfCardsRevealed);
  };
  clicked = 0;
};

const cardsRevealed = () => {
  if(numOfCardsRevealed === 10) {
      winner();
  } else {
      numOfCardsRevealed+=2
  }
}

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
