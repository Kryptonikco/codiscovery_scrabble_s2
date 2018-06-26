import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Board from './components/game/Board';
import LetterRack from './components/game/LetterRack';

class App extends React.Component {
  render() {
    const { lettersBoard, lettersRack } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <h2>Codiscovery Scrabble</h2>
        </div>
        <div className="row">
          <div className="col-8">
            <Board />
          </div>
          <div className="col-4">
            <LetterRack player="1" />
            <LetterRack player="2" disabled />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// export default DragDropContext(HTML5Backend)(App);
