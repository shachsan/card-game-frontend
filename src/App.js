import React, {Component} from 'react';
import DrawnCardContainer from './containers/DrawnCardContainer';
import DeckContainer from './containers/DeckContainer';
import './App.css';

class App extends Component{

  state={
    currentlyDrawnCards:[]
  }

  drawCardsHandler=(id)=>{
    console.log('deck id: ', id);
    fetch(`http://localhost:3000/api/deck/${id}/draw`)
      .then(res=>res.json())
      .then(drawnCards =>{
        console.log('drawnCards', drawnCards);
        this.setState({
          currentlyDrawnCards:drawnCards
        })
      })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-primary" style={{height:'80%'}}>
          <div className="col-md-12">
            <DrawnCardContainer currentlyDrawnCards={this.state.currentlyDrawnCards}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <DeckContainer drawCardsHandler={this.drawCardsHandler}/>
          </div>
        </div>

    </div>
    );
  }
 
}

export default App;
