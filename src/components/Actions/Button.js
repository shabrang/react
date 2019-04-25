import React, { Component } from 'react'

class Button extends Component {
  render () {
    return (
      <button
        className={ `counter-btn btn btn-${ this.props.className } mr-3` }
        onClick={ this.props.click }
      >
        { this.props.title }
      </button>
    )
  }
}

export default Button