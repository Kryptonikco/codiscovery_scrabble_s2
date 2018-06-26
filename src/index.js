import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { observe } from '../src/components/game/Game';

observe((lettersRack, lettersBoard) => {
  ReactDOM.render(
    <App lettersBoard={lettersBoard} lettersRack={lettersRack} />,
    document.getElementById('root')
  );
});
