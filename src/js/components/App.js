import React, {Component} from 'react'
import Board from './App/Board'

export default class App extends Component {
  render () {
    return (
      <div className='app'>
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    )
  }
}
