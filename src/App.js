import React, { Component } from 'react';
import SearchBox from './SearchBox';
import ResultList from './ResultsList';

class App extends Component {
  state= {
    peopleResults: []
  }

  APIbase = 'https://swapi.co/api'

  getPeople = (terms) => {
    fetch(`${this.APIbase}/people/?search=${terms}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Oops, something went wrong with the search');
        }
        return res.json();
      }).then(results => {
        this.setState({peopleResults: results.results});
        this.setHomeworlds();
        this.setSpecies();
      })
  }
  
  setHomeworlds = () => {
    const resultsCopy = this.state.peopleResults.map(i => i);
    this.state.peopleResults.map((result, key) => {
      fetch(result.homeworld)
      .then(res => {
        return res.json();
      }).then(homeworld => {
        result.homeworld = homeworld.name;
        resultsCopy[key] = result;
        this.setState({peopleResults: resultsCopy})
      });
    })
    // this.setState({personResults: results});
  }

  setSpecies = () => {
    const resultsCopy = this.state.peopleResults.map(i => i);
    this.state.peopleResults.map((result, key) => {
      fetch(result.species)
        .then(res => {
          return res.json();
        }).then(species => {
          result.species = species.name;
          resultsCopy[key] = result;
          console.log(resultsCopy);
          this.setState({peopleResults: resultsCopy});
        });
    })
  }

  handlePeopleSearch = (e) => {
    e.preventDefault();
    this.getPeople(e.target['search-input'].value)
  }

  render() {
    return (
      <>
        <header className="page-header">
          <h1>STAR WARS SEARCH</h1>
        </header>
        <main className='App'>
          <SearchBox submitSearch={this.handlePeopleSearch} />
          <ResultList results={this.state.peopleResults} />
        </main>
      </>
    );
  }
}

export default App;