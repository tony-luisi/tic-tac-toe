import React, {Component} from 'react'

export default class Square extends Component {
  render() {
    return (
      <div className='square'>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
