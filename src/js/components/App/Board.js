import React, {Component} from 'react'
import Square from './Square'

export default class Board extends Component {
  createSquares() {
    const noOfSquares = 9
    var squareArray = []
    for (let i = 0; i < noOfSquares; i++) {
      squareArray.push(<Square key={i} />)
    }
    return squareArray
  }

  render() {
    return (
      <div className='board'>
        <h1>Board</h1>
          {this.createSquares()}
      </div>
    )
  }
}
