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
    this.clickSquare = this.clickSquare.bind(this)
  }

  createArray() {
    var initialArray = []
    for (let i = 0; i < noOfSquares; i++){
      initialArray.push({
        content: "-",
        completed: false
      })
    }
    return initialArray
  }

  createSquares() {
    return this.state.squareArray.map((square, i) => {
      return <Square key={i} content={square.content} click={this.clickSquare} id={i}/>
    })
  }

  clickSquare(number) {
    if (!this.state.squareArray[number].completed) {
      this.updateSquare(number)
    }
  }

  updateSquare(number) {
    var newArray = this.state.squareArray
    newArray[number].content = this.getPlayerContent()
    newArray[number].completed = true
    this.setState({
      squareArray: newArray,
      playerOnesTurn: !this.state.playerOnesTurn
    })
  }

  getPlayerContent() {
    return this.state.playerOnesTurn ? "X" : "O"
  }

  render() {
    return (
      <div className='board'>
        {this.createSquares()}
      </div>
    )
  }
}
