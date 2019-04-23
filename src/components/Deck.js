import React, { Component } from 'react';

export default class Deck extends Component {

    
    render() {
        return (
             <div className="deck" onClick={(e)=>this.props.drawCardsHandler(this.props.deck.id)}>
             </div>
        );
    }
};
