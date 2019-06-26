import React, { Component } from 'react';

class Home extends Component {
    state = {
        advice: ''
    }

    componentDidMount() {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            //.then (json => console.log(json.slip.advice))
            .then(json => this.setState({
                advice: json.slip.advice
            }))
    } 
    render() {
        return (
            <div className="container">
                <div className="box center">
                    <h2 className="indigo-text text-darken-4">Have Some Fun</h2>
                    <p className="flow-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta velit, debitis illo ratione quis cumque in hic deserunt! Optio, cupiditate! Itaque magnam debitis aut explicabo. Consequuntur excepturi consequatur vel molestiae!</p>
                    <h4 className="gap indigo-text text-darken-4">Random Advice</h4>
                    <p className="flow-text">{this.state.advice}</p>
                </div>
            </div>
        )
    }
}

export default Home;