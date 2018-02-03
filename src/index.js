import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

class Quote extends React.Component {
    render() {
        return ( 
            <div className="quoteBox">
                <div className="quote">{ this.props.quote }</div>
                <div className="author">- { this.props.author }</div>
            </div>
        );
    }
}

class Btn extends React.Component{
    render() {
        return (
            <button className="getBtn" onClick={() => this.props.onClick()}>New quote</button>
        );
    }
}

class Reader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: 'Random quote...',
            author: ''
        }
    }

    componentDidMount() {
        this.handleClick();
    }

    handleClick() {
        axios.get(
            'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
            {
                headers: {
                    "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                }
        })
        .then(res => {
            if (typeof res.data === 'string') {
                res.data = JSON.parse(res.data); 
            }
            let quote = res.data.quote;
            let author = res.data.author;
            this.setState({
                quote: quote,
                author: author
            });
        });
    }

    render() {
        return (
            <div className="container">
                <Quote quote={this.state.quote} author={this.state.author}></Quote>
                <Btn onClick={() => this.handleClick()}></Btn>
            </div>
        );
    }
}

ReactDOM.render( <
    Reader / > ,
    document.getElementById('root')
);