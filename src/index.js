import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Quote extends React.Component {
    render() {
        return ( 
            <div>{ this.props.text }</div>
        );
    }
}

class Reader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'This is a new quote!!!!'
        };
    }
    render() {
        return ( <
            Quote text = { this.state.text } > < /Quote>
        );
    }
}

ReactDOM.render( <
    Reader / > ,
    document.getElementById('root')
);