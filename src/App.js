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
  }

  drawCardsHandler=(id)=>{
    console.log('deck id: ', id);
    fetch(`http://localhost:3000/api/deck/${id}/draw`)
      .then(res=>res.json())
      .then(data =>{
        console.log('drawnCards', data);
        this.setState({
          currentlyDrawnCards:data.cards,
          remaining:{deckId:data.id, cards:data.remaining}
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
            <DeckContainer drawCardsHandler={this.drawCardsHandler} remaining={this.state.remaining}/>
          </div>
        </div>

    </div>
    );
  }
 
}

export default App;
