import React, { Component } from 'react';

export default class DrawnCardContainer extends Component {


    getSuit=(suit)=>{
        if(suit==='spades') return "spades";
        if(suit==='club') return "club";
        if(suit==='diamond') return "diamond";
        if(suit==='heart') return "heart";
    }

    showDrawCards=(cards)=>{
        console.log('drawn cards in DrawnCardContainer', cards);
        const cardImgs=[];
        cards.map(card=>{
            return cardImgs.push(
                <div className="draw-card" key={card.value+card.suit}>
                    <div className="">{card.value}</div>
                    <div className={card.suit}></div>
                    <div className="">{card.value}</div>
                    
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
