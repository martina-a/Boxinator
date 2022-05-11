import React, { Component } from "react"

class Form extends Component {
  toggleDropdown() {
    document.getElementById("country-list").classList.toggle("show")
    console.log('Display dropdown')
  }

  render() {
    return (
      <div id="form-container">
        <form id="form">
          <label htmlFor="box-name">Name:</label><br/>
          <input type="text" id="box-name" name="box-name"/><br/>
          <label htmlFor="box-weight">Weight:</label><br/>
          <input type="text" id="box-weight" name="box-weight"/><br/>
          <label htmlFor="box-colour">Box colour:</label><br/>
          <input type="text" id="box-colour" name="box-colour"/><br/>
          <label htmlFor="country">Country:</label><br/>
          <select id="country-list">
            <option value="Sweden">Sweden</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
            <option value="Australia">Australia</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Form