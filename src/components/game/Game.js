const getNewLetters = () => {
  const letters = [];
  while (letters.length < 7) {
    const asciiNumber = getRandomInt(65, 90);
    const letter = String.fromCharCode(asciiNumber);
    letters.push(letter);
  }

  return letters;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let lettersBoard = {};
let lettersRack = getNewLetters();
let observer = null;

const emitChange = () => {
  observer(lettersRack, lettersBoard);
};

export const observe = o => {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
};

export const canMoveToTile = ({ letterTile, tile }) => {
  const { isOnBoard = false } = letterTile;
  if (isOnBoard === true) {
    return false;
  }
  const { tileId } = tile;

  return lettersBoard.hasOwnProperty(tileId) === false;
};

export const moveLetterTile = ({ letterTile, tile }) => {
  /// CODE

  emitChange();
};

export const validate = async () => {};

const wordIdsSequence = ['H8', 'I8', 'J8', 'K8', 'L8', 'M8', 'N8'];

const getWord = () => {
  const word = [];
  let isContinued = true;

  wordIdsSequence.forEach(tileId => {
    if (lettersBoard.hasOwnProperty(tileId)) {
      if (isContinued === true) {
        word.push(lettersBoard[tileId]);
      }
    } else {
      isContinued = false;
    }
  });

  return word.join('');
};

const backToRack = () => {
  const lettersBoardKeys = Object.keys(lettersBoard);
  lettersBoardKeys.forEach(tileId => {
    lettersRack.push(lettersBoard[tileId]);
  });
  lettersBoard = {};

  emitChange();
};
