// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isNumber: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  incrementButton = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({isNumber: prevState.isNumber + randomNumber}))
  }

  render() {
    const {isNumber} = this.state
    const displayText = isNumber % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Count {isNumber}</h1>
          <p className="para">Count is {displayText}</p>
          <button
            className="button"
            type="button"
            onClick={this.incrementButton}
          >
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100{' '}
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
