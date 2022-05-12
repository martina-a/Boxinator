import React, { Component } from 'react'

class List extends Component {
  render () {
    return (
      <div id="list-container">
        <table>
          <tr>
            <th>Reciever</th>
            <th>Weight</th>
            <th>Box colour</th>
            <th>Shipping cost</th>
          </tr>
          <tr>
            <td>Example 1</td>
            <td>22 kg</td>
            <td></td>
            <td>n SEK</td>
          </tr>
          <tr>
            <td>Example 2</td>
            <td>30 kg</td>
            <td></td>
            <td>n SEK</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default List
