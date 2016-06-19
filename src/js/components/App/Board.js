import React, {Component} from 'react'
import Square from './Square'

const noOfSquares = 9
const winnerConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
const tokenOne = "X", tokenTwo = "O"
const tokenOneWinner = tokenOne + tokenOne + tokenOne
const tokenTwoWinner = tokenTwo + tokenTwo + tokenTwo

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squareArray: this.createArray(noOfSquares),
      playerOnesTurn: true,
      gameWon: false,
      winner: ""
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
    this.checkWinner()
  }

  checkWinner() {
    const currentArray = this.state.squareArray
    winnerConditions.map((set) => {

      const currentCellContents = currentArray[set[0]].content + currentArray[set[1]].content + currentArray[set[2]].content

      if (currentCellContents === tokenOneWinner) {
        this.setState({ gameWon: true, winner: "Player One"})
      }
      else if (currentCellContents === tokenTwoWinner) {
        this.setState({ gameWon: true, winner: "Player Two"})
      }
    })
  }

  getPlayerContent() {
    return this.state.playerOnesTurn ? tokenOne : tokenTwo
  }

  render() {
    var completed = this.state.gameWon ? "Completed" : "In Progress"
    return (
      <div className='board'>
        {this.createSquares()}
        <p>{completed}</p>
      </div>
    )
  }
}
