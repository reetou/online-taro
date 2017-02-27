import React, { Component } from 'react';
import './App.css';
import './animate.css';
import {cards, cardqueue, cardback} from './Db.js';

class DeckItem extends React.Component {
  render() {
    return(
      <div>
        <div className="title">
          Кликните на колоду, чтобы перетасовать карты.
          Каждая карта означает ответ на вопрос, заложенный в номере карты.
        </div>
        <div className="item">
          <img src="img/the-3d-deck-min.png" className="animated flipInX" onClick={this.props.onClick}>
          </img>
        </div>
      </div>
    );
  }
}
class CardHistory extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <img src={this.props.image} onClick={this.props.onClick}></img>
        {this.props.children}
      </div>
    );
  }
}
class CardDetails extends React.Component {
  render() {
    return (
      <div className="card-details clearfix animated fadeIn">
        <div className="image-container" onClick={this.props.onClick}>
          <img src={this.props.image}></img>
          <span className="tip">Кликните на карту, чтобы закрыть.</span>
        </div>
        <h2>
          {this.props.answer}
        </h2>
        <h3>
          {this.props.name}
        </h3>
        <div className="traditional-meaning">
          <strong>Традиционные значения:</strong> {this.props.shortMeaning}
        </div>
        <div className="text-container">
          {this.props.meaning}
        </div>
      </div>
    );
  }
}
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCard: cardback,
      secondCard: cardback,
      thirdCard: cardback,
      fourthCard: cardback,
      fifthCard: cardback,
      sixthCard: cardback,
      seventhCard: cardback,
      rolledCards: [],
      reloadAnimation: false,
      cardAnswer: cardqueue,
      cardDetails: 8
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.showCardDetails = this.showCardDetails.bind(this);
    this.closeCardDetails = this.closeCardDetails.bind(this);
  }
  showCardDetails(selectedItemNumber) {
    this.setState(prevState => ({
      cardDetails: selectedItemNumber
    }));
  }
  closeCardDetails(selectedItemNumber) {
    this.setState(prevState => ({
      cardDetails: 8
    }));
  }
  handleClick() {
    let cardsArray = ['chariot','death','devil','emperor','empress','fool','hangedman','hermit','hierophant','highpriestess','judgment','justice','lovers','magician','moon','star','strength','sun','temperance','tower','wheeloffortune','world',];
    shuffle(cardsArray);
    let arrayvar = this.state.rolledCards.slice();  arrayvar.push(cardsArray[0],cardsArray[1],cardsArray[2],cardsArray[3],cardsArray[4],cardsArray[5],cardsArray[6]);
    this.setState({ 
      arrayvar: arrayvar, 
      firstCard: cards[arrayvar[0]], 
      secondCard: cards[arrayvar[1]],
      thirdCard: cards[arrayvar[2]],
      fourthCard: cards[arrayvar[3]],
      fifthCard: cards[arrayvar[4]],
      sixthCard: cards[arrayvar[5]],
      seventhCard: cards[arrayvar[6]],
      cardDetails: 8
    });
    this.setState(prevState => ({
      reloadAnimation: !prevState.reloadAnimation
    }));
  }
  render() {
    return (
      <div className="deck-container">
        <div id="deck-flipped">
          <DeckItem onClick={this.handleClick}></DeckItem>
        </div>
        <div className="chosen-cards">
          <CardHistory 
            className={this.state.reloadAnimation ? 'card animated flipInY' : 'card animated reload-flipInY'} 
            name={this.state.firstCard.name} 
            image={this.state.firstCard.image} 
            meaning={this.state.firstCard.meaning}
            cardqueueItem={this.state.cardAnswer.first.answer}
            cardDetails={this.state.cardDetails}
            onClick={() => this.showCardDetails(0)}
          />
          {
            this.state.cardDetails==0 
              ? <CardDetails 
                  image={this.state.firstCard.image} 
                  answer={this.state.cardAnswer.first.answer} 
                  name={this.state.firstCard.name} 
                  meaning={this.state.firstCard.meaning}
                  shortMeaning={this.state.firstCard.shortMeaning}
                  onClick={this.closeCardDetails} 
                />
              : null
          }
          <CardHistory 
            className={this.state.reloadAnimation ? 'card animated flipInY' : 'card animated reload-flipInY'} 
            name={this.state.secondCard.name} 
            image={this.state.secondCard.image} 
            meaning={this.state.secondCard.meaning}
            cardqueueItem={this.state.cardAnswer.second.answer}
            cardDetails={this.state.cardDetails}
            onClick={() => this.showCardDetails(1)}
          />
          {
            this.state.cardDetails==1 
              ? <CardDetails 
                  image={this.state.secondCard.image} 
                  answer={this.state.cardAnswer.second.answer} 
                  name={this.state.secondCard.name} 
                  meaning={this.state.secondCard.meaning} 
                  shortMeaning={this.state.secondCard.shortMeaning}
                  onClick={this.closeCardDetails} 
                />
              : null
          }
          <CardHistory 
            className={this.state.reloadAnimation ? 'card animated flipInY' : 'card animated reload-flipInY'} 
            name={this.state.thirdCard.name} 
            image={this.state.thirdCard.image} 
            meaning={this.state.thirdCard.meaning}
            cardqueueItem={this.state.cardAnswer.third.answer}
            cardDetails={this.state.cardDetails}
            onClick={() => this.showCardDetails(2)}
          />
          {
            this.state.cardDetails==2 
              ? <CardDetails 
                  image={this.state.thirdCard.image} 
                  answer={this.state.cardAnswer.third.answer} 
                  name={this.state.thirdCard.name} 
                  meaning={this.state.thirdCard.meaning} 
                  shortMeaning={this.state.thirdCard.shortMeaning}
                  onClick={this.closeCardDetails} 
               />
            : null
          }
          <CardHistory 
            className={this.state.reloadAnimation ? 'card animated flipInY' : 'card animated reload-flipInY'} 
            name={this.state.fourthCard.name} 
            image={this.state.fourthCard.image} 
            meaning={this.state.fourthCard.meaning}
            cardqueueItem={this.state.cardAnswer.fourth.answer}
            cardDetails={this.state.cardDetails}
            onClick={() => this.showCardDetails(3)}
          />
          {
            this.state.cardDetails==3 
              ? <CardDetails 
                  image={this.state.fourthCard.image} 
                  answer={this.state.cardAnswer.fourth.answer} 
                  name={this.state.fourthCard.name} 
                  meaning={this.state.fourthCard.meaning} 
                  shortMeaning={this.state.fourthCard.shortMeaning}
                  onClick={this.closeCardDetails} 
                />
              : null
          }
          <CardHistory 
            className={this.state.reloadAnimation ? 'card animated flipInY' : 'card animated reload-flipInY'} 
            name={this.state.fifthCard.name} 
            image={this.state.fifthCard.image} 
            meaning={this.state.fifthCard.meaning}
            cardqueueItem={this.state.cardAnswer.fifth.answer}
            cardDetails={this.state.cardDetails}
            onClick={() => this.showCardDetails(4)}
          />
          {
            this.state.cardDetails==4 
              ? <CardDetails 
                  image={this.state.fifthCard.image} 
                  answer={this.state.cardAnswer.fifth.answer} 
                  name={this.state.fifthCard.name} 
                  meaning={this.state.fifthCard.meaning}
                  shortMeaning={this.state.fifthCard.shortMeaning}
                  onClick={this.closeCardDetails} 
                />
              : null
          }
          <CardHistory 
            className={this.state.reloadAnimation ? 'card animated flipInY' : 'card animated reload-flipInY'} 
            name={this.state.sixthCard.name} 
            image={this.state.sixthCard.image} 
            meaning={this.state.sixthCard.meaning}
            cardqueueItem={this.state.cardAnswer.sixth.answer}
            cardDetails={this.state.cardDetails}
            onClick={() => this.showCardDetails(5)}
          />
          {
            this.state.cardDetails==5 
              ? <CardDetails 
                  image={this.state.sixthCard.image} 
                  answer={this.state.cardAnswer.sixth.answer} 
                  name={this.state.sixthCard.name} 
                  meaning={this.state.sixthCard.meaning} 
                  shortMeaning={this.state.sixthCard.shortMeaning}
                  onClick={this.closeCardDetails} 
                />
              : null
          }
          <CardHistory 
            className={this.state.reloadAnimation ? 'card animated flipInY' : 'card animated reload-flipInY'} 
            name={this.state.seventhCard.name} 
            image={this.state.seventhCard.image} 
            meaning={this.state.seventhCard.meaning}
            cardqueueItem={this.state.cardAnswer.seventh.answer}
            cardDetails={this.state.cardDetails}
            onClick={() => this.showCardDetails(6)}
          />
          {
            this.state.cardDetails==6 
              ? <CardDetails 
                  image={this.state.seventhCard.image} 
                  answer={this.state.cardAnswer.seventh.answer} 
                  name={this.state.seventhCard.name} 
                  meaning={this.state.seventhCard.meaning} 
                  shortMeaning={this.state.seventhCard.shortMeaning}
                  onClick={this.closeCardDetails} 
                />
              : null
          }
        </div>
      </div>
    );
  }
}
function shuffle(array) {
    var tmp, current, top = array.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}

export default Deck;
