import React from 'react';

class LetterTile extends React.Component {
  getPointsMap() {
    return {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 10,
      L: 1,
      M: 2,
      N: 1,
      O: 1,
      P: 3,
      Q: 8,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 10,
      X: 10,
      Y: 10,
      Z: 10
    };
  }

  render() {
    const { isOnBoard } = this.props;
    const color = 'black';
    const backgroundColor = 'wheat';
    const PADDING = 1;

    const pointsMap = this.getPointsMap();

    const size = this.props.size || 50;

    return (
      <div
        style={{
          width: size,
          height: size,
          display: 'inline-block',
          userSelect: 'none',
          cursor: 'pointer'
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: this.props.disabled ? backgroundColor : color,
            paddingBottom: isOnBoard ? 3 : undefined,
            backgroundColor,
            width: size - PADDING * 2,
            height: isOnBoard ? undefined : size - PADDING * 2,
            borderRadius: 5,
            fontSize: 30,
            position: 'relative'
            // top: -7
          }}
        >
          {this.props.letter}
          <span
            style={{
              fontSize: 8,
              position: 'absolute',
              bottom: 3,
              right: 3
            }}
          >
            {pointsMap[this.props.letter]}
          </span>
        </div>
      </div>
    );
  }
}

export default LetterTile;
