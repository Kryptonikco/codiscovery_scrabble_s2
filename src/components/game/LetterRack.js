import React from 'react';

import LetterTile from './LetterTile';

const LETTER_SIZE = 50;

export default class LetterRack extends React.Component {
  render() {
    const { letters = [] } = this.props;
    const PADDING = 5;
    const rackWidth = LETTER_SIZE * 7 + PADDING * 2;
    const rackHeight = LETTER_SIZE;

    return (
      <div
        style={{
          opacity: this.props.disabled ? 0.4 : 1,
          marginBottom: 20
        }}
      >
        <h3>Player {this.props.player}</h3>
        <div
          style={{
            backgroundColor: '#905000',
            width: rackWidth,
            height: rackHeight + 7,
            paddingLeft: PADDING
          }}
        >
          {letters.map((letter, index) => {
            return (
              <LetterTile
                key={index}
                disabled={this.props.disabled}
                letter={letter}
                size={LETTER_SIZE}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
