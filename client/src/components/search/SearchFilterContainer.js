import React, { Component } from 'react'
import axios from 'axios'

class SearchFilterContainer extends Component {
  state = {
    fungi: [],
  }

  componentDidMount() {
    axios
      .get(`/api/v1/fungus`)
      .then((response) => response.json())
      .then((fungi) => this.setState({ fungi: fungi }))
  }

  render() {
    return (
      <div className='drop-down'>
        <p>Select A Fungus</p>
        <select>
          {this.state.fungi.map((fungus) => (
            <option value='fungus.value'>{fungus.name}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default SearchFilterContainer
