import React, { Component } from 'react'
import './scss/_init.scss'

export default class App extends Component {
  state = {
    name: null,
    value: null
  }

  showName = () => {
    this.setState({ name: this.state.value })
  }

  setName = (event) => {
    const value = event.target.value

    this.setState({ value: value })
  }

  render () {
    console.log('Rendering')
    return (
      <div className='container-fluid mt-3'>
        <input type="text" onKeyUp={ this.setName }/>
        <button onClick={ this.showName }>Change Name</button>
        <span className='ml-2 d-inline-block'>{ this.state.value }</span>
      </div>
    )
  }

}