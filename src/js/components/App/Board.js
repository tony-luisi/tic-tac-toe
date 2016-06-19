import React, {Component} from 'react'
import Square from './Square'

const noOfSquares = 9

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squareArray: this.createArray(noOfSquares),
      playerOnesTurn: true
    }
  }

  createArray() {
    var initialArray = []

    for (let i = 0; i < noOfSquares; i++){
      initialArray.push({
        content: "-"
      })
    }

    return initialArray
  }

  createSquares() {
    return this.state.squareArray.map((square, i) => {
      return <Square key={i} content={square.content}/>
    })
  }

  render() {
    return (
      <div className='board'>
        {this.createSquares()}
      </div>
    )
  }
}
