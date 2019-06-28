import React, { Component } from 'react';
//import Tronald from 'tronalddump-io';
import { Link } from 'react-router-dom';

class TronaldDump extends Component {
    state = {
        tags: [],
        randomQuote: '',
        recipient: ''
    }
    
    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/random/quote')
        .then(res => res.json())
        .then(json => { console.log(json)
            this.setState({
            randomQuote:json.value,
            recipient: json.tags[0]
        })})
        .catch((e)=> console.log(e));

        fetch('https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/tag')
        .then(res => res.json())
        .then(json => {this.setState({
            tags:json._embedded
        })}) 
        .catch((e)=> console.log(e))
    }
    //https://api.tronalddump.io/search/quote?query=

    render() {
        let tagsLinks = this.state.tags.map((tag, index) => <li key={index}><Link to={'/tronald/'+tag}>{tag}</Link></li>)
        return (
            <div className="container">
                <h3 className=" center indigo-text text-darken-3">Donald Trump...</h3>
                <p className="flow-text">Disclaimer: Don't have anything against 'him', this is purely for educational purposes.<br/>Love him or hate him, but can't ignore him. Anyways, click on any of the links below and see what Mr. President thinks, or said about the person or topic...
                    Try not to choke with laughter :)
                </p>
                <p className="flow-text">Here's a teaser:</p>
                <div className="card">
                    <div className="card-content flow-text">
                    {this.state.randomQuote} <br/>
                    - Donald Trump on {this.state.recipient}
                    </div>
                </div>
                <ul className="flow-text">{tagsLinks} </ul>
            </div>
        )
    }
}

export default TronaldDump;