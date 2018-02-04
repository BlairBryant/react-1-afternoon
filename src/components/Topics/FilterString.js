import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: ["shoe", "box", "glove", "hat", "shirt"],
            userInput: "",
            filteredArray: []
        }

    }

    handleChange(e) {
        this.setState({userInput: e})    
        console.log(this.state.userInput)
    }
    
    click(userInput) {
        let newArr = [];

        for(let i = 0; i < this.state.unFilteredArray.length; i++) {
            if(this.state.unFilteredArray[i].includes(userInput)) {
                newArr.push(this.state.unFilteredArray[i])
            }
        }

        this.setState({filteredArray: newArr})
    }
  
    render() {
        return(
            <div className="puzzleBox filterStringPB">
                
                <h4>Filter String</h4>
                <span className="puzzleText">Things: { JSON.stringify(this.state.unFilteredArray) }</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => {this.click(this.state.userInput)}}></button>
                <span className="resultsBox filterStringRB">Filtered Things: { JSON.stringify(this.state.filteredArray) }</span>

            </div>
        )
    }
}

export default FilterString