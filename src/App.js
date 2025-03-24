import React, { Component } from 'react'
import "./App.css"
import Ticket from './ticket/Ticket'
export default class App extends Component {
  render() {
    return (
      <div className='conainer'>
        <Ticket />
      </div>
    )
  }
}

