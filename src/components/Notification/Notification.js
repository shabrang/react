import React, { Component } from 'react'

class Notification extends Component {
  render () {
    return (
      <div className="form-group">
        <div className='bg-info p-5 d-inline-block m-auto'>{ this.props.text }</div>
      </div>
    )
  }
}

export default Notification