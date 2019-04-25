import React, { Component } from 'react';

export default class Deck extends Component {

    
    render() {
        console.log('remaining inside Deck component--',this.props.deck.id, this.props.remaining[this.props.deck.id]);
        return (
            <div className="deck-wrapper">
                <div style={{margin:'auto', textAlign:'center', color:'white'}}>Cards </div>
                <div style={{margin:'auto', textAlign:'center', color:'white'}}>Remaining:{this.props.remaining[this.props.deck.id]}</div>
                <div className="deck" onClick={(e)=>this.props.drawCardsHandler(this.props.deck.id)}></div>
                <div style={{margin:'auto', textAlign:'center', color:'white'}}>Click to Draw</div>
            </div>
        );
    }
};
