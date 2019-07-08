import React, { Component } from 'react'
import './styles.css'
import FormPanel from './FormPanel'
import DataPanels from './DataPanels'
import SpecialInput from './SpecialInput'

export default class App extends Component {
  state = {
    money: 0,
    currency: '€',
  }

  componentDidMount() {
    setTimeout(() => {
      // after 3 seconds new value is returned to special input
      this.setState({
        currency: '$',
        money: 15,
      })
    }, 3000)
  }

  render() {
    const { currency, money } = this.state
    return (
      <div className="App">
        <FormPanel/>

        <DataPanels/>

        <div style={{ marginTop: 30 }}>
          <SpecialInput currency={currency} value={money}/>
        </div>
      </div>
    )
  }
}

