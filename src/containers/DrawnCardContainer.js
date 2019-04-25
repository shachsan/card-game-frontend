import React, { Component } from 'react';

export default class DrawnCardContainer extends Component {


    showDrawCards=(cards)=>{
        console.log('drawn cards in DrawnCardContainer', cards);
        const cardImgs=[];
        cards.map((card, i)=>{
            return cardImgs.push(
                <div className={`draw-card draw-card-${i}`} key={card.value+card.suit}>
                    <div className={`card-value card-value-${card.suit}`}>{card.value}</div>
                    <div className={`top-${card.suit} top-suit`}></div>
                    <div className={
                        card.value==='J' ||
                        card.value==='Q' ||
                        card.value==='K' ?
                        `${card.value+card.suit} suits`  : `${card.suit} suits`}></div>
                    <div className={`bottom-${card.suit} bottom-suit`}></div>
                    <div className={`card-bottom-value card-value card-value-${card.suit}`}>{card.value}</div>
                    
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
