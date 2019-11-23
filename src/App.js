import React, { Component } from 'react';
import SearchBox from './SearchBox';
import ResultList from './ResultsList';

class App extends Component {
  state= {
    peopleResults: [],
    planetsResults: [],
    starshipsResults: [],
    vehiclesResults: [],
    speciesResults: [],
    fieldsToSearch: {
      people: true,
      planets: true,
      starships: true,
      vehicles: true,
      species: true
    }
  }

  APIbase = 'https://swapi.co/api'

  getData = (terms, category) => {
    this.clearResults();
    fetch(`${this.APIbase}/${category}/?search=${terms}`)
      .then(res => {
        return res.json();
      }).then(results => {
        this.setState({[`${category}Results`]: results.results});
        this.setHomeworlds();
        this.setSpecies();
      }).catch(e => {

      })
  }

  clearResults = () => {
    this.setState({peopleResults: []});
    this.setState({planetsResults: []});
    this.setState({starshipsResults: []});
    this.setState({vehiclesResults: []});
    this.setState({speciesResults: []});
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
          this.setState({peopleResults: resultsCopy});
        });
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
    if (this.state.fieldsToSearch.people) {
      this.getData(e.target['search-input'].value, 'people')
    }
    if (this.state.fieldsToSearch.planets) {
      this.getData(e.target['search-input'].value, 'planets')
    }
    if (this.state.fieldsToSearch.starships) {
      this.getData(e.target['search-input'].value, 'starships')
    }
    if (this.state.fieldsToSearch.vehicles) {
      this.getData(e.target['search-input'].value, 'vehicles')
    }
    if (this.state.fieldsToSearch.species) {
      this.getData(e.target['search-input'].value, 'species')
    }
  }

  toggleSearchFields = (checkboxName) => {
    this.setState({fieldsToSearch: {...this.state.fieldsToSearch, [checkboxName]: !this.state.fieldsToSearch[checkboxName]}})
  }

  render() {
    return (
      <>
        <header className="page-header">
          <h1>STAR WARS SEARCH</h1>
        </header>
        <main className='App'>
          <SearchBox 
            submitSearch={this.handleSearch} 
            fieldsToSearch={this.state.fieldsToSearch}
            toggleCheck={this.toggleSearchFields}
          />
          <ResultList 
            peopleResults={this.state.peopleResults} 
            planetsResults={this.state.planetsResults}
            starshipsResults={this.state.starshipsResults}
            vehiclesResults={this.state.vehiclesResults}
            speciesResults={this.state.speciesResults}
          />
        </main>
      </>
    );
  }
}

export default App;