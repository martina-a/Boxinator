import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      weight: null,
      colour: '#FFFFFF',
      country: 'Sweden',
      eventMessage: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.convertToHSL = this.convertToHSL.bind(this)
  }

  handleSubmit (e) {
    for (const value in this.state) {
      if (this.state[value] === 'undefined' || this.state[value] === null) {
        alert('You must enter a valid value for ' + value)
        return
      }
    }

    fetch('http://localhost:8081/boxes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        reciever: this.state.name,
        weight: parseInt(this.state.weight),
        colour: this.state.colour,
        cost: this.calculateCost()
      })
    }).then(response => response.text())
      .then(data => {
        this.setState({
          eventMessage: data
        })
      }).catch(err => {
        console.log('Error Reading data ' + err)
      })

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

  convertToHSL (hex) { // Source: https://www.html-code-generator.com/javascript/color-converter-script
    hex = hex.replace(/#/g, '')
    if (hex.length === 3) {
      hex = hex.split('').map(function (hex) {
        return hex + hex
      }).join('')
    }
    const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(hex)
    if (!result) {
      return null
    }
    let r = parseInt(result[1], 16)
    let g = parseInt(result[2], 16)
    let b = parseInt(result[3], 16)
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = (max + min) / 2
    let s = (max + min) / 2
    let l = (max + min) / 2
    if (max === min) {
      h = s = 0
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h /= 6
    }
    s = s * 100
    s = Math.round(s)
    l = l * 100
    l = Math.round(l)
    h = Math.round(360 * h)

    if (h >= 150 && h <= 270) {
      alert('You are not allowed to choose any shade of blue.')
      document.getElementById('box-colour').value = '#FFFFFF'
    } else {
      this.setState({ colour: `hsl(${h}, ${s}%, ${l}%)` })
    }
  }

  render () {
    return (
      <div id="form-container">
        <form id="form" onSubmit={this.handleSubmit}>
          <label htmlFor="box-name">Reciever name:</label><br/>
          <input type="text" id="box-name" name="box-name" onChange={e => this.setState({ name: e.target.value })}/><br/>
          <label htmlFor="box-weight">Weight:</label><br/>
          <input type="number" id="box-weight" name="box-weight" step=".01" onChange={e => this.setState({ weight: e.target.value })}/><br/>
          <label htmlFor="box-colour">Box colour:</label><br/>
          <input type="color" id="box-colour" name="box-colour" onChange={e => this.convertToHSL(e.target.value)}/><br/>
          <label htmlFor="country">Country:</label><br/>
          <select id="country-list" onChange={e => this.setState({ country: e.target.value })}>
            <option label="Sweden">Sweden</option>
            <option label="China">China</option>
            <option label="Brazil">Brazil</option>
            <option label="Australia">Australia</option>
          </select><br/>
          <input type="submit" id="save-btn" placeholder="Save"/>
        </form>
        <div id="event-message">
        {this.state.eventMessage}
        </div>
      </div>
    )
  }
}

export default Form
