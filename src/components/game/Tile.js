import React from 'react';

class Tile extends React.Component {
  render() {
    const { letter, isOnBoard } = this.props;
    const PADDING = 1;
    const colorMap = {
      base: 'white',
      ld: '#6cf',
      lt: '#06f',
      wd: '#f9f',
      wt: 'red',
      center: '#ffc14d'
    };

    const colorTile = colorMap[this.props.type];

    return (
      <div
        style={{
          padding: PADDING,
          display: 'inline-block'
        }}
      >
        <div
          style={{
            width: this.props.size - PADDING * 2,
            height: this.props.size - PADDING * 2,
            textAlign: 'center',
            backgroundColor: colorTile,
            color: colorTile,
            userSelect: 'none'
          }}
        >
          {letter ? letter : this.props.type}
        </div>
      </div>
    );
  }
}

export default Tile;
