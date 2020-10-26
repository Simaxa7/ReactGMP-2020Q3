import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import './topOfHead.css';
import AppLogo from '../app-logo';
import ItemAdd from '../item-add/item-add';
import SearchPanel from '../search-panel';
import MovieDetails from '../movie-details';
import { setItemActive } from '../../redux/actions/actionsQuerry';

const TopOfHead = (props) => {
  const dispatch = useDispatch();

  const {
    onChangeItem,
    onSetSearchValue,
    searchValue,
  } = props;

  const { itemActive } = useSelector((state) => state.qOptions);

  return (
    <div className="wrap-large topOfHead">
      <div className="d-flex-between">
        <AppLogo />
        { !itemActive
          ? (
            <ItemAdd
              onChangeItem={onChangeItem}
            />
          )
          : (
            <div
              className="magnifier"
              onClick={() => dispatch(setItemActive({ id: '', data: [] }))}
              onKeyDown={() => dispatch(setItemActive({ id: '', data: [] }))}
              tabIndex={0}
              role="button"
            >
              .
            </div>
          )}
      </div>
      {!itemActive
        ? (
          <div className="topOfHead-search">
            <h2 className="topOfHead-search-title">FIND YOUR MOVIE</h2>
            <SearchPanel
              onSetSearchValue={onSetSearchValue}
              searchValue={searchValue}
            />
          </div>
        )
        : <MovieDetails />}
    </div>
  );
};

TopOfHead.propTypes = {
  onChangeItem: PropTypes.instanceOf(Function).isRequired,
  onSetSearchValue: PropTypes.instanceOf(Function).isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default TopOfHead;
