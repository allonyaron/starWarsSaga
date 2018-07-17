import React, { Component } from 'react';
import logo from '../star-wars-logo.svg';
import '../App.css';
import { characters } from '../data/characters.json';
import FilmList from './FilmList';
import ButtonList from './ButtonList';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ''
    }
    this.handleStarWarsRequest = this.handleStarWarsRequest.bind(this);
  }

  handleStarWarsRequest = (url, name) => () => {
      this.setState({active: name});
      this.props.fetchStarWarsRequest(url); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Choose Star Wars Character</h1>
        </header>
        <main className="main-container">
          <ButtonList characters={characters} handleStarWarsRequest={this.handleStarWarsRequest} active={this.state.active}/>
          {this.props.errorMsg ? <div className="error">{this.props.errorMsg}</div> : ''}
          <FilmList filmsData={this.props.filmsData} />
        </main>
      </div>
    );
  }
}

export default App;
