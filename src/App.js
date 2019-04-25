import React, {Component} from 'react';
import DrawnCardContainer from './containers/DrawnCardContainer';
import DeckContainer from './containers/DeckContainer';
import './App.css';

class App extends Component{

  state={
    currentlyDrawnCards:[],
    remaining:{},
    removeDeckId:false,
  }

  setRemainingForNewDeck=(id)=>{
    let newRemaining={...this.state.remaining}
    newRemaining[id]=52;
    this.setState({
      remaining:newRemaining,
    })
  }

  removeDeck=(id)=>{
    this.setState({
      removeDeckId:id,
    })
  }

  resetRemoveDeckId=()=>{
    this.setState({
      removeDeckId:!this.state.removeDeckId
    })
  }

  drawCardsHandler=(id)=>{
    fetch(`http://localhost:3000/api/deck/${id}/draw`)
      .then(res=>res.json())
      .then(data =>{
        let newRemaining = {...this.state.remaining};
        newRemaining[data.deckId]=data.remaining; 
          this.setState({
            currentlyDrawnCards:data.cards,
            remaining:newRemaining
          },()=>{
            if(data.remaining===0)
              this.removeDeck(id)
          })

        })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row draw-bg">
          <div className="col-md-12 draw-center">
            <DrawnCardContainer currentlyDrawnCards={this.state.currentlyDrawnCards}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <DeckContainer drawCardsHandler={this.drawCardsHandler} 
                    remaining={this.state.remaining}
                    setRemainingForNewDeck={this.setRemainingForNewDeck}
                    removeDeck={this.state.removeDeckId}
                    resetRemoveDeckId={this.resetRemoveDeckId}/>
          </div>
        </div>

    </div>
    );
  }
 
}

export default App;
