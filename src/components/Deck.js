import React, { Component } from 'react';

export default class Deck extends Component {

    
    render() {
        return (
            <div>
                <div style={{textAlign:'center'}}>Cards Remaining:{this.props.remaining.cards}</div>
                <div className="deck" onClick={(e)=>this.props.drawCardsHandler(this.props.deck.id)}></div>
                <div style={{textAlign:'center'}}>Click to Draw</div>
             </div>
        );
    }
};
