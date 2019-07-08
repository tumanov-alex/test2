import React, { Component } from 'react'
import './styles.css'

// TASK: form that calculates sum of all fields
// TASK 2: clean up/optimize as much as possible
const LabelInput = ({ i, value, onChange }) =>
  <div>
    <label>Field {i}</label>

    <input
      value={value[ i ] || ''}
      type="text"
      onChange={evt => onChange({ ...value, [i]: evt.target.value })}
    />
  </div>

const Form = ({ fields, value, onChange, onSubmit }) =>
  <form className="myForm">
    <div className="fields">
      {fields.map(i =>
        <LabelInput
          key={i}
          i={i}
          value={value}
          onChange={onChange}
        />)}
    </div>

    <input type="submit" value="Submit" onClick={onSubmit}/>
  </form>

const fields = Array.from({ length: 151 }).map((_, i) => i)

export default class FormPanel extends Component {
  state = {
    fields,
    sum: null,
    value: fields.reduce((obj, item) => {
      obj[ item ] = 0
      return obj
    }, {}),
  }

  submit = (value) => {
    const sum = Object.values(value).reduce(
      (total, num) => total += parseInt(num),
      0,
    )

    this.setState({ sum })
  }

  render() {
    const { fields, value, sum } = this.state

    return (
      <div className="Form">
        <h3>Calculate numbers of all fields</h3>

        <Form
          value={value}
          fields={fields}
          onChange={value => this.setState({ value })}
          onSubmit={() => this.submit(value)}
        />

        {sum === undefined ? `Sum of all fields is ${sum}` : 'Calculate all fields.'}
      </div>
    )
  }
}
