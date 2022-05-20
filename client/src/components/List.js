import React, { Component } from 'react'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      boxes: []
    }

    this.calculateSum = this.calculateSum.bind(this)
  }

  componentDidMount () {
    fetch('http://localhost:8080/boxes/', {
      method: 'GET'
    }).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            boxes: result
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  calculateSum () {

  }

  render () {
    const { error, isLoaded, boxes } = this.state
    if (error) {
      console.log(boxes)
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
      <div id="list-container">
        <table>
        <thead>
        <tr>
            <th>Reciever</th>
            <th>Weight</th>
            <th>Box colour</th>
            <th>Shipping cost</th>
        </tr>
        </thead>
        <tbody>
        {boxes.map(box => (
            <tr key={box.id}>
              <td>{box.reciever}</td>
              <td>{box.weight}</td>
              <td>{box.colour}</td>
              <td>{box.cost}</td>
            </tr>
        ))}
        </tbody>
        </table>
      </div>
      )
    }
  }
}

export default List
