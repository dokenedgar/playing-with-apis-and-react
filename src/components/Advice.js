import React, { Component } from 'react';

class Advice extends Component {
    state = {
        advice : ''
    }

    componentDidMount() {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(json => this.setState({
                advice: json.slip.advice
            })) 
    }

    getAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(json => this.setState({
                advice: json.slip.advice
        }))
    }

    render() {
        return (
            <div className="container">
                <div className="center">
                    <h4 className="indigo-text text-darken-4">Advice</h4>
                    <p className="flow-text">Find some interesting advice here, obtained from the API at: 'https://api.adviceslip.com/advice'</p>
                </div>
                <br/>
                <div className="center card">
                    <div className="card-content">
                        <p className="flow-text">{this.state.advice}</p>
                    </div>
                    <div className="card-action">
                        <button onClick= { this.getAdvice } className="btn indigo darken-3">Get Fresh Advice</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Advice;