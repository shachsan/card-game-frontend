import React, { Component } from 'react';

export default class Deck extends Component {

    
    render() {
        console.log('remaining inside Deck component--',this.props.remaining);
        return (
            <div className="deck-wrapper">
                <div style={{margin:'auto', textAlign:'center'}}>Cards Remaining:{
                    this.props.remaining.deckId===this.props.deck.id ? this.props.remaining.cards : null
                }</div>
                <div className="deck" onClick={(e)=>this.props.drawCardsHandler(this.props.deck.id)}></div>
                <div style={{margin:'auto', textAlign:'center'}}>Click to Draw</div>
             </div>
        );
    }
};
