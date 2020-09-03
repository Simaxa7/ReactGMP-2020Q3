import React, { Component } from 'react';

import './film-genre.css';

class FilmGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 2,
    };
    this.onClickToggleActive = this.onClickToggleActive.bind(this);
  }

  onClickToggleActive(doActiveItem) {
    const newActiveItem = doActiveItem;
    this.setState(() => ({ activeItem: newActiveItem }));
  }

  render() {
    const {
      activeItem,
    } = this.state;
    return (
      <div className="film-genre">
        <button
          type="button"
          className={`film-genre-item ${activeItem === 1 ? 'active' : ''}`}
          onClick={() => this.onClickToggleActive(1)}
        >
          ALL
        </button>
        <button
          type="button"
          className={`film-genre-item ${activeItem === 2 ? 'active' : ''}`}
          onClick={() => this.onClickToggleActive(2)}
        >
          DOCUMENTARY
        </button>
        <button
          type="button"
          className={`film-genre-item ${activeItem === 3 ? 'active' : ''}`}
          onClick={() => this.onClickToggleActive(3)}
        >
          COMEDY
        </button>
        <button
          type="button"
          className={`film-genre-item ${activeItem === 4 ? 'active' : ''}`}
          onClick={() => this.onClickToggleActive(4)}
        >
          HORROR
        </button>
        <button
          type="button"
          className={`film-genre-item ${activeItem === 5 ? 'active' : ''}`}
          onClick={() => this.onClickToggleActive(5)}
        >
          CRIME
        </button>
      </div>
    );
  }
}

export default FilmGenre;
