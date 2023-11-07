// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generate = () => {
    const randNum = Math.ceil(Math.random() * 100)
    this.setState({num: randNum})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="title">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.generate}>
            Generate
          </button>
          <p className="random-num">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
