import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './movies-card-list-item.css';
import DotsDropdownMenu from '../dots-dropdown-menu';

const MoviesCardListItem = (props) => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const showDropdownMenu = (event) => {
    event.stopPropagation();
    setDropdownMenu(true);
  };

  const hideDropdownMenu = (event) => {
    event.stopPropagation();
    setDropdownMenu(false);
  };

  const [modalDelete, setModalDelete] = useState(false);
  const showModalDelete = () => setModalDelete(true);
  const hideModalDelete = () => setModalDelete(false);

  const [modalEdit, setModalEdit] = useState(false);
  const showModalEdit = () => setModalEdit(true);
  const hideModalEdit = () => setModalEdit(false);

  function onShowModalEdit(event) {
    document.body.classList.add('modal-open');
    event.stopPropagation();
    showModalEdit();
  }

  function onShowModalDelete(event) {
    document.body.classList.add('modal-open');
    event.stopPropagation();
    showModalDelete();
  }

  function onHideModalDelete(event) {
    event.stopPropagation();
    document.body.classList.remove('modal-open');
    hideModalDelete(event);
    hideDropdownMenu(event);
  }

  function onHideModal(event) {
    event.stopPropagation();
    document.body.classList.remove('modal-open');
    hideDropdownMenu(event);
    hideModalDelete();
    hideModalEdit();
  }

  function onHideModalDeleteAndDel(event) {
    event.stopPropagation();
    onHideModalDelete(event);
    props.onDeleteItem();
  }

  function onHideDotsDropdownMenu(event) {
    event.stopPropagation();
    hideDropdownMenu(event);
  }

  const {
    title,
    genres,
    posterPath,
    release,
    itemData,
  } = props;

  return (
    <>
      <img
        className="mcli--img"
        src={posterPath}
        alt="lorem"
      />
      <div className="mcli--title-and-year-box d-flex-between">
        <div className="mcli--title">{title}</div>
        <div className="mcli---year">{release}</div>
      </div>
      <div className="mcli--genres">{genres}</div>
      <button
        onClick={showDropdownMenu}
        className="dots-icon"
        type="button"
      >
        <span className="dots-icon-dot">.</span>
      </button>
      { dropdownMenu
        ? (
          <DotsDropdownMenu
            isShowModalDeleteOpen={modalDelete}
            isShowModalEditOpen={modalEdit}
            showDotsDropdownMenu={dropdownMenu}
            onHideDotsDropdownMenu={onHideDotsDropdownMenu}
            onShowModalDelete={onShowModalDelete}
            onHideModalDelete={onHideModalDelete}
            onHideModalDeleteAndDel={onHideModalDeleteAndDel}
            onShowModalEdit={onShowModalEdit}
            onHideModal={onHideModal}
            itemData={itemData}
          />
        )
        : null }
    </>
  );
};

MoviesCardListItem.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.string,
  posterPath: PropTypes.string,
  release: PropTypes.string,
  onDeleteItem: PropTypes.instanceOf(Function).isRequired,
  itemData: PropTypes.instanceOf(Object).isRequired,
};

MoviesCardListItem.defaultProps = {
  title: 'There should be a title',
  genres: 'there should be a genres',
  posterPath: 'there should be a posterPath',
  release: 'Unknown',
};

export default MoviesCardListItem;
