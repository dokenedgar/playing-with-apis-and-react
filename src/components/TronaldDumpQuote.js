import React, { Component } from 'react';

class TronaldDumpQuote extends Component {
    state = {
        tag: this.props.match.params.tag,
        receivedQuotes: [],
        next: null,
    }

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/search/quote?query='+this.state.tag)
        .then(res => res.json())
        .then(json => {
           // console.log(json._embedded.quotes)
            //console.log(json,'\nCurrent items count', json.count, 'Total Items ', json.total)
            this.setState({
                receivedQuotes: json._embedded.quotes,
            })
            if (json._links.next) {
                this.setState({
                    next: json._links.next.href
                })
            }
        }) 
        .catch((e)=> console.log(e))
    }

    componentDidUpdate(){
        window.scrollTo(0,0)
    }

    nextQuote = () => {
        fetch('https://cors-anywhere.herokuapp.com/https://api.tronalddump.io'+this.state.next)
        .then(res => res.json())
        .then( json => {
            this.setState({
                receivedQuotes: json._embedded.quotes
            })
            if (json._links.next) {
                this.setState({
                    next: json._links.next.href
                })
            } else {
                this.setState({
                    next: null
                })
            }
        })
    }
    render() {
       console.log('null',this.state.next)
        let quotesCard = this.state.receivedQuotes.map((quote,index) => {
            return(
                <div className="card" key={index}>
                    <div className="card-content">
                        <p className="flow-text">{quote.value}</p>
                    </div>
                    <div className="card-action">
                       <p>Appeared at: {quote.appeared_at} <br/>
                       Source: <a className='indigo-text text-darken-4 truncate' href={quote._embedded.source[0].url}>{quote._embedded.source[0].url}</a> </p> 
                    </div>
                </div>
            )
        })
        if(this.state.next !== null) {
            return(
                <div className="center">
                <h3 className="indigo-text text-darken-4">Trump On {this.state.tag}</h3>
                {quotesCard}
                <button className="btn" onClick={this.nextQuote}>next</button>
                </div>
            )
        }
        else {
            return(
                <div className="center">
                <h3 className="indigo-text text-darken-4">Trump On {this.state.tag}</h3>
                {quotesCard}
                </div>
            )
        } 
    }
}

export default TronaldDumpQuote;