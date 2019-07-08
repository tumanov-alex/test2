import React, { Component, Fragment } from 'react'

// TASK: bug happens when from outside a new prop value is received
// leave internal state since it's crucial how you handle prop change
export default class SpecialInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
      currency: props.currency,
      prevProps: props,
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      value: props.value === state.prevProps.value ? state.value : props.value,
      currency: props.currency !== state.currency ? state.currency : props.currency,
      prevProps: props,
    }
  }

  updateInput = evt =>
    this.setState({ value: evt.target.value })

  render() {
    const { value, currency } = this.state
    const isEur = currency === '€'

    return (
      <Fragment>
        On the market
        {` ${currency}`}
        <input
          style={{ marginRight: 5, marginLeft: 5 }}
          size={5}
          value={value}
          onChange={this.updateInput}
        />
        costs
        {` ${isEur ? value * 1.1 : value * 0.9}`}
        {isEur ? 'USD' : 'EUR'}.
        <button
          style={{ marginLeft: 10 }}
          onClick={() => {
            this.setState({ currency: isEur ? '$' : '€' })
          }}
        >
          Switch
        </button>
      </Fragment>
    )
  }
}
