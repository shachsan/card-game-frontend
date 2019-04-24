import React, { Component } from 'react';
import Deck from '../components/Deck';

export default class DeckContainer extends Component {

    state={
        decks:[],
        maxDecks:false,
        message:'',
    }

    createNewDeck=()=>{
        fetch('http://localhost:3000/api/deck/new')
            .then(res=>res.json())
            .then(deck=>{
                console.log('create new deck response', deck);
                if(deck.message){
                    this.setState({
                        maxDecks:true,
                        message:deck.message,
                    })
                }else{
                    let newDecks = [...this.state.decks, deck]
                    this.setState({
                        decks:newDecks
                    })
                    this.props.setRemainingForNewDeck(deck.id)
                }
            })
    }

    renderDecks=()=>{
        return this.state.decks.map(deck=>{
            return <Deck key={deck.id} deck={deck} drawCardsHandler={this.props.drawCardsHandler} remaining={this.props.remaining}/>
        })
    }

    removeEmptyDeck=(id)=>{
        let decksCopy = [...this.state.decks];
        decksCopy.splice(decksCopy.findIndex(deck=>deck.id===id),1) // remove the deck from the decks array
        this.setState({
            decks:decksCopy,
            maxDecks:decksCopy.length < 5 ? false : true,
        })
        this.props.resetRemoveDeckId();
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
        if(this.props.removeDeck) this.removeEmptyDeck(this.props.removeDeck);
        console.log('DeckContainer render==', this.state.decks);
        return (
             <div className="row">
                <div className="col-md-2" style={{display:'inline-block'}}>
                    {this.state.maxDecks ?  <div className="bg-danger text-white text-center p-1 mt-2">{this.state.message}</div> : null}
                    <button className="btn btn-primary mt-2" onClick={this.createNewDeck}>New Deck</button>
                    
                </div>

                <div className="col-md-10">
                    {this.renderDecks()}
                </div>
             </div>
        );
    }
};
