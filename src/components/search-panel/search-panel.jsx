import React, { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  render() {
    const { label } = this.state;
    return (
      <form className="search-panel-group">
        <input
          placeholder="What do you want to watch?"
          className="search-panel-input"
          onChange={this.onLabelChange}
          value={label}
        />
        <button
          className="search-panel-button"
          type="submit"
        >
          SEARCH
        </button>
      </form>
    );
  }
}

export default SearchPanel;
