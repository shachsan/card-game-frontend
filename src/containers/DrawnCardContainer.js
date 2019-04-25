import React, { Component } from 'react';

export default class DrawnCardContainer extends Component {


    showDrawCards=(cards)=>{
        const cardImgs=[];
        cards.map((card, i)=>{

            return cardImgs.push(

                <div className={`draw-card draw-card-${i}`} key={card.value+card.suit}>
                    <div className={`card-value card-value-${card.suit}`}>{card.value}</div>
                    <div className="top-suit" 
                         style={{backgroundImage: `url(${require(`../img/${card.suit}.png`)})`}}>
                    </div>
                    <div className="suits"
                         style={
                            card.value==='J' ||
                            card.value==='Q' ||
                            card.value==='K' ?
                            {backgroundImage: `url(${require(`../img/${card.value+card.suit}.png`)})`}
                            :{backgroundImage: `url(${require(`../img/${card.suit}.png`)})`}}>
                    </div>
                    <div className="bottom-suit" 
                         style={{backgroundImage: `url(${require(`../img/${card.suit}.png`)})`}}>
                    </div>
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
