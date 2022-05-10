import React, { Component } from "react"

class Form extends Component {
  toggleDropdown() {
    console.log('Display dropdown')
  }

  render() {
    return (
      <div id="form-container">
        <form>
          <label htmlFor="box-name">Name:</label>
          <input type="text" id="box-name" name="box-name"/>
          <label htmlFor="box-weight">Weight:</label>
          <input type="text" id="box-weight" name="box-weight"/>
          <label htmlFor="box-colour">Box colour:</label>
          <input type="text" id="box-colour" name="box-colour"/>
          <label htmlFor="country">Country:</label>
          <input onClick={this.toggleDropdown} type="text" id="country" name="country"/>
        </form>
      </div>
    )
  }
}

export default Form