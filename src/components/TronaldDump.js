import React, { Component } from 'react';
//import Tronald from 'tronalddump-io';
import { Link } from 'react-router-dom';

class TronaldDump extends Component {
    state = {
        tags: []
    }
    
    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/tag')
        .then(res => res.json())
        .then(json => {this.setState({
            tags:json._embedded
        })}) 
        .catch((e)=> console.log(e))
    }
    //https://api.tronalddump.io/search/quote?query=

    render() {
        let tagsLinks = this.state.tags.map(tag => <li><Link to={'/tronald/'+tag}>{tag}</Link></li>)
        return (
            <div className="container">
                <h3 className=" center indigo-text text-darken-3">Donald Trump...</h3>
                <p className="flow-text">Love him or hate him, but can't ignore him. Anyways, click on any of the links below and see what Mr. President thinks, or said about the person or topic...
                    Don't read this while eating, you might choke with laughter :)
                </p>
                <p className="flow-text"><ul>{tagsLinks} </ul></p>
            </div>
        )
    }
}

export default TronaldDump;