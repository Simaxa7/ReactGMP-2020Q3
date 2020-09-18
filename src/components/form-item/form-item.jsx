import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem } from '../../redux/actions/actionsGenre';

import './form-item.css';
import ButtonClose from '../button-close';

const FormItem = (props) => {
  const {
    type,
    onHideModal,
    options,
  } = props;

  const {
    id,
    title,
    release_date: release,
    poster_path: movieUrlValue,
    genres,
    overview,
    runtime: runtimeValue,
  } = options;

  const dispatch = useDispatch();
  const { qOptions } = useSelector((state) => state);

  const transfArrToObjGenres = {};
  genres.forEach((el) => { transfArrToObjGenres[el] = el; });

  const [showSelectOption, setShowSelectOption] = useState(false);
  const onClickSelectToggle = () => setShowSelectOption(!showSelectOption);

  const [formTitle, setFormTitle] = useState(title);
  const [formRelease, setFormRelease] = useState(release);
  const [formPosterPath, setFormPosterPath] = useState(movieUrlValue);
  const [formGenreValue, setFormGenreValue] = useState({
    Crime: false,
    Documentary: false,
    Comedy: false,
    Horror: false,
    ...transfArrToObjGenres,
  });
  const [formOverviewValue, setFormOverviewValue] = useState(overview);
  const [formRuntimeValue, setFormRuntimeValue] = useState(runtimeValue);

  const clickChecked = ({ target: { name, checked } }) => {
    const value = checked
      ? { [name]: name }
      : { [name]: '' };

    setFormGenreValue({ ...formGenreValue, ...value });
  };

  const onClickSubmit = (e) => {
    e.preventDefault();

    const item = {
      ...options,
      title: formTitle,
      release_date: formRelease,
      poster_path: formPosterPath,
      genres: Object.values(formGenreValue).filter(Boolean),
      overview: formOverviewValue,
      runtime: formRuntimeValue,
    };

    if (id) {
      dispatch(updateItem({ options: qOptions, item }));
    } else {
      item.id = Math.floor(Math.random() * Math.floor(1000000));
      dispatch(addItem({ options: qOptions, item }));
    }
    onHideModal(e);
  };

  const onClickReset = () => {
    setFormTitle(title);
    setFormRelease(release);
    setFormPosterPath(movieUrlValue);
    setFormGenreValue({});
    setFormOverviewValue(overview);
    setFormRuntimeValue(runtimeValue);
  };

  const formGenreInputBoxClassName = `form-genre-input-box ${
    showSelectOption ? '' : 'invisible'}`;
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
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
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
          value={formRelease}
          onChange={(e) => setFormRelease(e.target.value)}
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
          value={formPosterPath}
          onChange={(e) => setFormPosterPath(e.target.value)}
        />
      </label>
      <div
        className="form-genre"
      >
        <div className="form-genre-label">GENRE</div>
        <button
          className="form-genre-label-select"
          onClick={onClickSelectToggle}
          type="button"
        >
          Select genre
        </button>
        <div
          className={formGenreInputBoxClassName}
        >
          <label
            htmlFor="Crime"
            className="form-genre-crime-label"
          >
            <input
              checked={formGenreValue && formGenreValue.Crime}
              type="checkbox"
              id="form-genre-crime"
              name="Crime"
              className="form-genre-crime-input"
              onChange={(e) => clickChecked(e)}
            />
            Crime
          </label>
          <label
            htmlFor="Documentary"
            className="form-genre-documentary-label"
          >
            <input
              checked={formGenreValue && formGenreValue.Documentary}
              type="checkbox"
              id="form-genre-documentary"
              name="Documentary"
              className="form-genre-documentary-label"
              onChange={(e) => clickChecked(e)}
            />
            Documentary
          </label>
          <label
            htmlFor="Horror"
            className="form-genre-horror-label"
          >
            <input
              checked={formGenreValue && formGenreValue.Horror}
              type="checkbox"
              id="form-genre-horror"
              name="Horror"
              className="form-genre-horror-input"
              onChange={(e) => clickChecked(e)}
            />
            Horror
          </label>
          <label
            htmlFor="Comedy"
            className="form-genre-comedy-label"
          >
            <input
              checked={formGenreValue && formGenreValue.Comedy}
              type="checkbox"
              id="form-genre-comedy"
              name="Comedy"
              className="form-genre-comedy-label"
              onChange={(e) => clickChecked(e)}
            />
            Comedy
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
          value={formOverviewValue}
          onChange={(e) => setFormOverviewValue(e.target.value)}
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
          value={formRuntimeValue}
          onChange={(e) => setFormRuntimeValue(e.target.value)}
        />
      </label>
      <div className="form-double-buttons">
        <ButtonClose
          options={
            {
              type: 'buttonActionRevert',
              text: 'RESET',
              onClickFunc: onClickReset,
            }
          }
        />
        <ButtonClose
          options={
            {
              type: 'buttonActionDefault',
              text: 'SUBMIT',
              onClickFunc: onClickSubmit,
            }
          }
        />
      </div>
    </form>
  );
};

FormItem.propTypes = {
  type: PropTypes.string,
  onHideModal: PropTypes.instanceOf(Function).isRequired,
  options: PropTypes.shape({
    text: PropTypes.string,
    genres: PropTypes.arrayOf(Array),
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
    poster_path: PropTypes.string,
  }),
};

FormItem.defaultProps = {
  type: '',
  options: ({
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: 0,
  }),
};

export default FormItem;
