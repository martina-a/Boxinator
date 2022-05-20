import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      weight: null,
      colour: '#FFFFFF',
      country: 'Sweden'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    for (const value in this.state) {
      if (this.state[value] === 'undefined' || this.state[value] === null) {
        alert('You must enter a valid value for ' + value)
        return
      }
    }

    fetch('http://localhost:8080/boxes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        weight: parseInt(this.state.weight),
        colour: this.state.colour,
        cost: this.calculateCost()
      })
    }).then(response => response.json())
      .then(data => {
        console.log(data)
      }).catch(err => {
        // Do something for an error here
        console.log('Error Reading data ' + err)
      })

    console.log(this.state)

    e.preventDefault()
  }

  calculateCost () {
    let multiplier
    if (this.state.country === 'Sweden') {
      multiplier = 1.3
    } else if (this.state.country === 'China') {
      multiplier = 4
    } else if (this.state.country === 'Brazil') {
      multiplier = 8.6
    } else if (this.state.country === 'Australia') {
      multiplier = 7.2
    }

    const cost = parseInt(this.state.weight) * multiplier
    return cost
  }

  render () {
    return (
      <div id="form-container">
        <form id="form" onSubmit={this.handleSubmit}>
          <label htmlFor="box-name">Reciever name:</label><br/>
          <input type="text" id="box-name" name="box-name" onChange={e => this.setState({ name: e.target.value })}/><br/>
          <label htmlFor="box-weight">Weight:</label><br/>
          <input type="number" id="box-weight" name="box-weight" onChange={e => this.setState({ weight: e.target.value })}/><br/>
          <label htmlFor="box-colour">Box colour:</label><br/>
          <input type="color" id="box-colour" name="box-colour" onChange={e => this.setState({ colour: e.target.value })}/><br/>
          <label htmlFor="country">Country:</label><br/>
          <select id="country-list" onChange={e => this.setState({ country: e.target.value })}>
            <option label="Sweden">Sweden</option>
            <option label="China">China</option>
            <option label="Brazil">Brazil</option>
            <option label="Australia">Australia</option>
          </select><br/>
          <input type="submit" id="save-btn" placeholder="Save"/>
        </form>
      </div>
    )
  }
}

export default Form
