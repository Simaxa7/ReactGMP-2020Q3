import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { addItem, updateItem } from '../../redux/actions/actionsGenre';
import movieValidationSchema from '../../helpers/movie-validation-schema';
import genreListRender from '../../helpers/genreListRender';
import createInitialChecked from '../../helpers/initialChecked';
import MovieTextField from '../movie-text-field';
import FormItemSelect from '../form-item-select';
import './form-item.css';

const FormItem = (props) => {
  const { type, onHideModal, options } = props;

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

  const onClickSubmit = (e) => {
    e.preventDefault();

    const newOldGenres = createInitialChecked(genres);
    const updatedGenres = {};

    // eslint-disable-next-line
    genreListRender.forEach((el) => updatedGenres[el] = !!e.target[el].checked);

    const combineObjectsAndDeleteFalse = Object.fromEntries(Object.entries(
      { ...newOldGenres, ...updatedGenres },
    )
      .filter((el) => el[1]));

    const updatedFields = {
      title: e.currentTarget.title.value,
      release_date: e.currentTarget.release.value,
      poster_path: e.currentTarget.movieUrlValue.value,
      overview: e.currentTarget.overview.value,
      genres: Object.keys(combineObjectsAndDeleteFalse),
      runtime: Number(e.currentTarget.runtimeValue.value),
    };

    const item = {
      ...options,
      ...updatedFields,
    };

    if (id) {
      dispatch(updateItem({ options: qOptions, item }));
    } else {
      dispatch(addItem({ options: qOptions, item }));
    }
    onHideModal(e);
  };

  return (
    <>
      <Formik
        initialValues={
          {
            id,
            title,
            release,
            movieUrlValue,
            genres,
            overview,
            runtimeValue,
          }
        }
        validationSchema={movieValidationSchema}

      >
        <Form className="item-add-form" onSubmit={(e) => onClickSubmit(e)}>
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
          <MovieTextField
            name="title"
            label="Title"
            placeholder="Title here"
          />
          <MovieTextField
            name="release"
            label="Release"
            placeholder="Select Date"
            type="date"
          />
          <MovieTextField
            name="movieUrlValue"
            label="Movie url"
            placeholder="Movie URL here"
          />
          <Field
            name="genres"
            label="Genres"
            placeholder="Select genre"
            component={FormItemSelect}
            genres={genres}
          />
          <MovieTextField
            name="overview"
            label="Overview"
            placeholder="Overview here"
          />
          <MovieTextField
            name="runtimeValue"
            label="Runtime"
            placeholder="Runtime here"
          />

          <div className="form-double-buttons">
            <button
              className="button-action-revert button-action"
              // eslint-disable-next-line
              type="reset"
            >
              RESET
            </button>
            <button
              className="button-action-default button-action"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </Form>
      </Formik>
    </>
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
