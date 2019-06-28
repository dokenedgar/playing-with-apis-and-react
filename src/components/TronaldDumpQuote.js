import React, { Component } from 'react';

class TronaldDumpQuote extends Component {
    state = {
        tag: this.props.match.params.tag,
        receivedQuotes: [],
        next: null,
        previous: null,
        current: null,
        last: null,
        first: null,
    }

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/search/quote?query='+this.state.tag)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({
                receivedQuotes: json._embedded.quotes,
                previous: json._links.prev.href,
                current: json._links.self.href,
                last: json._links.last.href,
                first: json._links.first.href
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
        console.log('did update')
        window.scrollTo(0,0)
    }

    getQuote = (typeOfQuote) => {
        fetch('https://cors-anywhere.herokuapp.com/https://api.tronalddump.io'+typeOfQuote)
        .then(res => res.json())
        .then( json => {
            console.log(json)
            this.setState({
                receivedQuotes: json._embedded.quotes,
                previous: json._links.prev.href,
                current: json._links.self.href,
                last: json._links.last.href,
                first: json._links.first.href
            })
            if (json._links.next) {
                this.setState({
                    next: json._links.next.href
                })
            } else {
                this.setState({
                   // next: null
                })
            }
        })
    }
    render() {
      // console.log('null',this.state.next)
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
        if(this.state.next === null) {
            return(
                <div className="center">
                <h3 className="indigo-text text-darken-4">Trump On {this.state.tag}</h3>
                {quotesCard}
                </div>
            )
        }
        if(this.state.first === this.state.current) {
            return(
                <div className="center">
                <h3 className="indigo-text text-darken-4">Trump On {this.state.tag}</h3>
                {quotesCard}
                <button className="btn" onClick={()=>{this.getQuote(this.state.next)}}>next</button>      
                </div>
            )
        }
        if(this.state.last === this.state.current ) {
            return(
                <div className="center">
                <h3 className="indigo-text text-darken-4">Trump On {this.state.tag}</h3>
                {quotesCard}
                <button className="btn" onClick={()=>{this.getQuote(this.state.previous)}}>prev</button> &nbsp;      
                </div>
            )
        }
        if(this.state.current !== this.state.first && this.state.current !== this.state.last) {
            return(
                <div className="center">
                <h3 className="indigo-text text-darken-4">Trump On {this.state.tag}</h3>
                {quotesCard}
                <button className="btn" onClick={()=>{this.getQuote(this.state.previous)}}>prev</button> &nbsp; 
                <button className="btn" onClick={()=>{this.getQuote(this.state.next)}}>next</button>           
                </div>
            )
        }

    }
}

export default TronaldDumpQuote;