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
                    <p className="flow-text">So I started learning React and was looking for simple projects to practice with. So thought of making a really simple web app that consumes some API and see how all the work flow is implemented using React.
                        <br/>
                        As my guy Friedrich Nietzsche said: “He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying.” Nothing complicated here, this is just me trying to stand up...
                    </p>
                    <h4 className="gap indigo-text text-darken-4">Random Advice</h4>
                    <p className="flow-text">{this.state.advice}</p>
                </div>
            </div>
        )
    }
}

export default Home;