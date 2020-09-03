import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './form-item.css';
import ButtonClose from '../button-close';

class FormItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelectOption: 'invisible',
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
    this.onClickSelectToggle = this.onClickSelectToggle.bind(this);
  }

  onClickSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({ ...state }));
  }

  onClickReset() {
    this.setState((state) => ({ ...state }));
  }

  onClickSelectToggle() {
    this.setState((state) => {
      const newState = { ...state };

      newState.showSelectOption = newState.showSelectOption
        ? ''
        : 'invisible';
      return { ...newState };
    });
  }

  render() {
    const {
      type,
      options,
    } = this.props;
    const {
      id,
      title: titleValue,
      release: releaseDateValue,
      posterPath: movieUrlValue,
      overviewValue,
      runtimeValue,
    } = options;

    const { showSelectOption } = this.state;
    return (
      <form className="item-add-form">
        {type === 'editItem'
          ? (
            <>
              <div className="form-id-label">MOVIE ID</div>
              <div className="item-add-form-id">
                {id}
              </div>
            </>
          )
          : null}
        <label htmlFor="form-title">
          TITLE
          <input
            id="form-title"
            name="form-title"
            type="text"
            placeholder="What needs to be done"
            className="item-add-form-input"
            defaultValue={titleValue}
          />
        </label>
        <label htmlFor="form-date">
          RELEASE DATE
          <input
            id="form-date"
            name="form-url"
            type="date"
            className="item-add-form-input"
            placeholder="Select Date"
            min="1918-01-01"
            max="2020-12-31"
            defaultValue={releaseDateValue}
          />
        </label>
        <label htmlFor="form-url">
          MOVIE URL
          <input
            id="form-url"
            name="form-url"
            type="text"
            className="item-add-form-input"
            placeholder="Moview URL here"
            defaultValue={movieUrlValue}
          />
        </label>
        <div
          className="form-genre"
        >
          <div className="form-genre-label">GENRE</div>
          <button
            className="form-genre-label-select"
            onClick={this.onClickSelectToggle}
            type="button"
          >
            Select genre
          </button>
          <div className={`form-genre-input-box ${showSelectOption}`}>
            <label
              htmlFor="form-genre-comedy"
              className="form-genre-comedy-label"
            >
              <input
                type="checkbox"
                id="form-genre-comedy"
                name="form-genre-comedy"
                className="form-genre-comedy-input"
              />
              Comedy
            </label>
            <label
              htmlFor="form-genre-crime"
              className="form-genre-crime-label"
            >
              <input
                type="checkbox"
                id="form-genre-crime"
                name="form-genre-crime"
                className="form-genre-crime-label"
              />
              Crime
            </label>
          </div>
        </div>
        <label htmlFor="form-overview">
          OVERVIEW
          <input
            id="form-overview"
            name="form-overview"
            type="text"
            className="item-add-form-input"
            placeholder="Overview here"
            defaultValue={overviewValue}
          />
        </label>
        <label htmlFor="form-runtime">
          RUNTIME
          <input
            id="form-runtime"
            name="form-runtime"
            type="text"
            className="item-add-form-input"
            placeholder="Runtime here"
            defaultValue={runtimeValue}
          />
        </label>

        <div className="form-double-buttons">
          <ButtonClose
            options={
              {
                type: 'buttonActionRevert',
                text: 'RESET',
                onClickFunc: this.onClickReset,
              }
            }
          />
          <ButtonClose
            options={
              {
                type: 'buttonActionDefault',
                text: 'SUBMIT',
                onClickFunc: this.onClickSubmit,
              }
            }
          />
        </div>
      </form>
    );
  }
}

FormItem.propTypes = {
  type: PropTypes.string,
  options: PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    release: PropTypes.string,
    overviewValue: PropTypes.string,
    runtimeValue: PropTypes.string,
    posterPath: PropTypes.string,
  }),
};

FormItem.defaultProps = {
  type: '',
  options: ({
    title: '',
    release: '',
    posterPath: '',
    genreValue: 'comedy',
    overviewValue: '',
    runtimeValue: '',
  }),
};

export default FormItem;
