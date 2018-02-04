import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: [{"food": "tacos", "place": "home", "when": "always"}, {"food": "burritos", "place": "mexico", "when": "tomorrow"}, {"name": "taco bravo", "age": "17", "looks": "homely"}], 
            userInput: "",
            filteredArray: []
        }

    }

        handleChange(e) {
            this.setState({ userInput: e })
            console.log(this.state.userInput)
        }    

        click(userInput) {
            let newArray = [];
            
            for(let i = 0; i < this.state.unFilteredArray.length; i++)
                if(this.state.unFilteredArray[i].hasOwnProperty(userInput)){
                    newArray.push(this.state.unFilteredArray[i])
                }
            
            this.setState({filteredArray: newArray})           
        }

    render() {
        return(
            <div className="puzzleBox filterObjectPB">

                <h4>FilterObject</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => {this.click(this.state.userInput)}}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>

            </div>
        )
    }
}

export default FilterObject