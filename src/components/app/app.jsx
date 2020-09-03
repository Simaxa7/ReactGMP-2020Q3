import React, { Component } from 'react';

import './app.css';
import TopOfHead from '../top-of-head';
import Main from '../main';
import Footer from '../footer';
import data from '../../data/movies.json';
import ErrorBoundary from '../ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: data.filter((el, ind) => ind > 0 && ind < 7),
    };
  }

  deleteItem = (id) => {
    this.setState(({ moviesData }) => {
      const newArr = moviesData.filter((el) => el.id !== id);
      return { moviesData: newArr };
    });
  };

  changeItem = (curItemData) => {
    console.log('changeItem ', curItemData);
  };

  render() {
    const { moviesData } = this.state;
    const count = moviesData.length;

    return (
      <div className="app">
        <ErrorBoundary>
          <TopOfHead
            onChangeItem={this.changeItem}
          />
          <Main
            count={count}
            moviesData={moviesData}
            onDeleteItem={this.deleteItem}
          />
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
