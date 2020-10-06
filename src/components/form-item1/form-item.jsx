import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { addItem, updateItem } from '../../redux/actions/actionsGenre';
import movieValidationSchema from '../../helpers/movie-validation-schema';

import MovieTextField from '../movie-text-field';
import FormItemSelect from '../form-item-select';

import '../form-item/form-item.css';
import ButtonClose from '../button-close';

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
    console.log('+++', e.currentTarget.genres);
    console.log('options', options);
    e.preventDefault();

    const item = {
      ...options,
      title: e.currentTarget.title.value,
      release_date: e.currentTarget.release.value,
      poster_path: e.currentTarget.movieUrlValue.value,
      overview: e.currentTarget.overview.value,
      runtime: e.currentTarget.runtimeValue.value,

    };

    if (id) {
      dispatch(updateItem({ options: qOptions, item }));
    } else {
      item.id = Math.floor(Math.random() * Math.floor(1000000));
      dispatch(addItem({ options: qOptions, item }));
    }
    onHideModal(e);
  };

  // const isDefaultChecked = {
  //   documentary: false,
  //   comedy: false,
  //   horror: false,
  //   crime: false,
  // };

  // const transfArrToObjGenres = {};
  // genres.forEach((el) => {
  //   transfArrToObjGenres[el.toLowerCase()] = el.toLowerCase();
  // });
  //
  // const [checkedSelectors, setCheckedSelectors] = useState({
  //   ...isDefaultChecked,
  //   ...transfArrToObjGenres,
  // });

  // const onChangeCheckedSelectors = (e) => {
  //   console.log('111111111111');
  //   const valName = e.target.name;
  //   const newVal = { [valName]: !checkedSelectors[valName] };
  //   setCheckedSelectors({ ...checkedSelectors, ...newVal });
  // };

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
