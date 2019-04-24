import React, {Component} from 'react';
import DrawnCardContainer from './containers/DrawnCardContainer';
import DeckContainer from './containers/DeckContainer';
import './App.css';

class App extends Component{

  state={
    currentlyDrawnCards:[],
    remaining:{
      deckId:'',
      cards:''
    },
    removeDeckId:false,

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
    console.log('deck id: ', id);
    fetch(`http://localhost:3000/api/deck/${id}/draw`)
      .then(res=>res.json())
      .then(data =>{
        console.log('drawnCards', data);
        if(data.remaining===0){
          this.removeDeck(id);
        }else{
          this.setState({
            currentlyDrawnCards:data.cards,
            remaining:{deckId:data.deckId, cards:data.remaining}
          })

        }
        
      })
  }
  render() {
    console.log('remaining state:', this.state.remaining);
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
                    removeDeck={this.state.removeDeckId}
                    resetRemoveDeckId={this.resetRemoveDeckId}/>
          </div>
        </div>

    </div>
    );
  }
 
}

export default App;
