import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (savedList.find(m => m.title === movie.title))
      return;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <Router>
        <Fragment>
          <SavedList list={this.state.savedList} />
          <Route exact component={MovieList} path="/" />
          <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={this.addToSavedList} /> } />
        </Fragment>
      </Router>
    );
  }
}
