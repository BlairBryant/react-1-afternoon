import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    click(num1, num2) {
        this.setState({sum: (Number(num1)+Number(num2))})
    }
    


    render() {
        return(
            <div className="puzzleBox filterStringPB">
                
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => {this.setState({number1: e.target.value})}}/>
                <input className="inputLine" onChange={(e) => {this.setState({number2: e.target.value})}}/>
                <button className="confirmationButton" onClick={() => this.click(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {JSON.stringify(this.state.sum)}</span>

            </div>
        )
    }
}

export default Sum