import React, { Component } from 'react';

export default class DrawnCardContainer extends Component {


    showDrawCards=(cards)=>{
        console.log('drawn cards in DrawnCardContainer', cards);
        const cardImgs=[];
        cards.map(card=>{
            return cardImgs.push(
                <div className="draw-card" key={card.value+card.suit}>
                    <div className={`card-top-value card-value-${card.suit}`}>{card.value}</div>
                    <div className={`top-${card.suit}`}></div>
                    <div className={card.suit}></div>
                    <div className={`bottom-${card.suit}`}></div>
                    <div className={`card-bottom-value card-value-${card.suit}`}>{card.value}</div>
                    
                </div>)
        })
        return cardImgs;
    }
    render() {
        return (
             <div className="card-container">
                {this.showDrawCards(this.props.currentlyDrawnCards)}
             </div>
        );
    }
};
