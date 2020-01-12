import React, { Component } from 'react';
import './App.css';
import Superheroes from './Superheroes';
import AddHero from './AddHero';
import './superhero.css';

class App extends Component {
  state = {
    heroes:
      [{ hero: "Superman", name: "Clark kent", power: "fly", id: 1 },
      { hero: "Batman", name: "Bruce Wayne", power: "Jump", id: 2 },
      { hero: "Spiderman", name: "Pitter Parker", power: "spiddy", id: 3 }]
  }
  addHeroFunc = (new_hero) => {
    const new_heroes_list = [...this.state.heroes]
    new_heroes_list.push(new_hero)
    new_hero.id = new_heroes_list.length + 1
    this.setState({ heroes: new_heroes_list });
  }

  deleteHeroFunc = (id) => {
    const new_heroes_list = this.state.heroes.filter(hiro => hiro.id != id)
    this.setState({ heroes: new_heroes_list });
  }

  render() {
    return (
      <div className="App">
        Hello World!
      <hr />
        <Superheroes heroes={this.state.heroes} delete_func={this.deleteHeroFunc} />
        <AddHero add_func={this.addHeroFunc} className="hero1" />
      </div>
    );
  }
}

export default App;