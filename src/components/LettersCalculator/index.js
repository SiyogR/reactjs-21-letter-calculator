// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInput = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="container">
        <div className="direction-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
        <div className="direction-container">
          <h1 className="h1">
            Calculate the
            <br /> Letters you
            <br /> enter
          </h1>
          <label className="p" htmlFor="pharseText">
            Enter the phrase
          </label>
          <input
            placeholder="Enter the pharse"
            className="design"
            id="pharseText"
            onChange={this.onChangeInput}
            value={inputPhrase}
            type="text"
          />
          <div className="box">
            <p className="style">No.of letters: {inputPhrase.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
