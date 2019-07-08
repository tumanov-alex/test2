import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

class Data extends PureComponent {
  props: {
    url: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
  }

  state = {
    items: 0,
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(res => this.setState({ items: res.count }))
  }

  render() {
    return this.props.render(this.state.items)
  }
}

export default class extends PureComponent {
  render() {
    return (
      <Fragment>
        <Data
          url='https://swapi.co/api/planets/?page=1'
          render={(data) =>
            <h1>There are {data} planets. Planets are so big!</h1>
          }
        />
        <Data
          url='https://swapi.co/api/people/?page=1'
          render={(data) =>
            <small>
              There are {data} people. And yes they are small.
            </small>
          }
        />
        <Data
          url='https://swapi.co/api/starships/?page=1'
          render={(data) =>
            <h4>{data} starships can be found in the galaxy.</h4>
          }
        />
      </Fragment>
    )
  }
}
