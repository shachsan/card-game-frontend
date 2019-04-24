import React, { Component } from 'react';
import Deck from '../components/Deck';

export default class DeckContainer extends Component {

    state={
        decks:[],
    }

    renderDecks=()=>{
        return this.state.decks.map(deck=>{
            return <Deck key={deck.id} deck={deck} drawCardsHandler={this.props.drawCardsHandler} remaining={this.props.remaining}/>
        })
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/deck')
            .then(res=>res.json())
            .then(decks=>{
                this.setState({
                    decks:decks,
                })
            })
    }
    render() {
        console.log('DeckContainer render==', this.state.decks);
        return (
             <>
                {this.renderDecks()}
             </>
        );
    }
};
