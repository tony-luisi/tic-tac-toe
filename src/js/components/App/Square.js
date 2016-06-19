import React, {Component} from 'react'

export default class Square extends Component {
  render() {
    return (
      <div className='square' onClick={() => {this.props.click(this.props.id)}}>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
