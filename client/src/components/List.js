import React, { Component } from 'react'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      boxes: []
    }

    this.calTotalWeight = this.calTotalWeight.bind(this)
    this.calTotalCost = this.calTotalCost.bind(this)
  }

  /**
   * Is called immediately.
   * Asks the server for all saved boxes.
   */
  componentDidMount () {
    fetch('http://localhost:8081/boxes/', {
      method: 'GET'
    }).then(res => res.json())
      .then(
        (result) => {
          if (result.error) {
            this.setState({
              isLoaded: true,
              error: result.error
            })
          } else {
            this.setState({
              isLoaded: true,
              boxes: result
            })
          }
        }
      )
  }

  /**
   * Calculates the weight sum of all the boxes.
   */
  calTotalWeight () {
    let totalWeight = 0

    for (let i = 0; i < this.state.boxes.length; i++) {
      totalWeight += this.state.boxes[i].weight
    }

    return totalWeight + ' kg'
  }

  /**
   * Calculates the cost sum of all the boxes.
   */
  calTotalCost () {
    let totalCost = 0

    for (let i = 0; i < this.state.boxes.length; i++) {
      totalCost += this.state.boxes[i].cost
    }

    return totalCost + ' SEK'
  }

  render () {
    const { error, isLoaded, boxes } = this.state
    if (error) {
      return <div id="error"><p>Error: {error}</p></div>
    } else if (!isLoaded) {
      return <div id="loading"><p>Loading...</p></div>
    } else {
      return (
      <div id="tbl-container">
        <table id="box-tbl">
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
              <td>{box.weight} kg</td>
              <td style={{ backgroundColor: box.colour }}></td>
              <td>{box.cost} SEK</td>
            </tr>
        ))}
        </tbody>
        </table>
        <table id="sum-tbl">
          <thead>
            <tr>
              <th>Total weight</th>
              <th>Total cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.calTotalWeight()}</td>
              <td>{this.calTotalCost()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      )
    }
  }
}

export default List
