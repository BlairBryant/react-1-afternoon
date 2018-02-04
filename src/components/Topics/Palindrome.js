import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    handleChange(e) {
        this.setState({userInput: e})
    }

    click(userInput) {
        let count = 0;

        for(let i = 0; i < userInput.length; i++) {
            if(userInput.charAt(i) === userInput.charAt(userInput.length - (i+1))) {
                count++
            }
        }
        if(count === userInput.length) {
            this.setState({palindrome: true})
        }
        else {
            this.setState({palindrome: false})
        }

    }


    render() {
        return(
            <div className="puzzleBox filterStringPB">

                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => {this.click(this.state.userInput)}}>Check</button>
                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>

            </div>
        )
    }
}

export default Palindrome