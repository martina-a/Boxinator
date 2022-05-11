import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      weight: null,
      color: '#FFFFFF',
      country: null
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

    console.log(this.state)
    e.preventDefault()
  }

  render () {
    return (
      <div id="form-container">
        <form id="form" onSubmit={this.handleSubmit}>
          <label htmlFor="box-name">Name:</label><br/>
          <input type="text" id="box-name" name="box-name" onChange={e => this.setState({ name: e.target.value })}/><br/>
          <label htmlFor="box-weight">Weight:</label><br/>
          <input type="number" id="box-weight" name="box-weight" onChange={e => this.setState({ weight: e.target.value })}/><br/>
          <label htmlFor="box-colour">Box colour:</label><br/>
          <input type="color" id="box-colour" name="box-colour" onChange={e => this.setState({ color: e.target.value })}/><br/>
          <label htmlFor="country">Country:</label><br/>
          <select id="country-list" onChange={e => this.setState({ country: e.target.value })}>
            <option value="Sweden">Sweden</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
            <option value="Australia">Australia</option>
          </select><br/>
          <input type="submit" id="save-btn" placeholder="Save"/>
        </form>
      </div>
    )
  }
}

export default Form
