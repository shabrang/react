import React, { Component } from 'react'
import Button from '../Actions/Button'
import Notification from '../Notification/Notification'

export default class Counter extends Component {
  state = {
    counter: 0
  }

  reset = () => {
    this.setState({ counter: 0 })
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render () {

    return (
      <div className='container mt-5 text-center'>
        <Notification text={ this.state.counter }/>

        <Button title='+' className='success' click={ this.increment }/>
        <Button title='-' className='danger' click={ this.decrement }/>
        <Button title='Reset' className='warning' click={ this.reset }/>

      </div>
    )
  }

}