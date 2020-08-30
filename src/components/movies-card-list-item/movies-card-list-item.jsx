import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './movies-card-list-item.css';
import DotsDropdownMenu from '../dots-dropdown-menu';

class MoviesCardListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDotsDropdownMenu: false,
      isShowModalDeleteOpen: false,
      isShowModalEditOpen: false,
    };
    this.onShowDotsDropdownMenu = this.onShowDotsDropdownMenu.bind(this);
    this.onHideDotsDropdownMenu = this.onHideDotsDropdownMenu.bind(this);
    this.onShowModalDelete = this.onShowModalDelete.bind(this);
    this.onHideModalDelete = this.onHideModalDelete.bind(this);
    this.onHideModalDeleteAndDel = this.onHideModalDeleteAndDel.bind(this);
    this.onShowModalEdit = this.onShowModalEdit.bind(this);
    this.onHideModal = this.onHideModal.bind(this);
  }

  onShowModalEdit() {
    document.body.classList.add('modal-open');
    this.setState({
      isShowModalEditOpen: true,
    });
  }

  onShowModalDelete() {
    document.body.classList.add('modal-open');
    this.setState({
      isShowModalDeleteOpen: true,
    });
  }

  onHideModalDelete() {
    document.body.classList.remove('modal-open');
    this.setState({
      isShowModalDeleteOpen: false,
      showDotsDropdownMenu: false,
    });
  }

  onHideModal() {
    document.body.classList.remove('modal-open');
    this.setState({
      isShowModalDeleteOpen: false,
      showDotsDropdownMenu: false,
      isShowModalEditOpen: false,
    });
  }

  onHideModalDeleteAndDel() {
    this.onHideModalDelete();
    this.props.onDeleteItem();
  }

  onShowDotsDropdownMenu() {
    this.setState({
      showDotsDropdownMenu: true,
    });
  }

  onHideDotsDropdownMenu() {
    this.setState({
      showDotsDropdownMenu: false,
    });
  }

  render() {
    const {
      title,
      genres,
      posterPath,
      release,
      itemData,
    } = this.props;

    const {
      showDotsDropdownMenu,
      isShowModalDeleteOpen,
      isShowModalEditOpen,
    } = this.state;

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
          onClick={this.onShowDotsDropdownMenu}
          className="dots-icon"
          type="button"
        >
          <span className="dots-icon-dot">.</span>
        </button>
        { showDotsDropdownMenu
          ? (
            <DotsDropdownMenu
              isShowModalDeleteOpen={isShowModalDeleteOpen}
              isShowModalEditOpen={isShowModalEditOpen}
              showDotsDropdownMenu={showDotsDropdownMenu}
              onHideDotsDropdownMenu={this.onHideDotsDropdownMenu}
              onShowModalDelete={this.onShowModalDelete}
              onHideModalDelete={this.onHideModalDelete}
              onHideModalDeleteAndDel={this.onHideModalDeleteAndDel}
              onShowModalEdit={this.onShowModalEdit}
              onHideModal={this.onHideModal}
              itemData={itemData}
            />
          )
          : null }
      </>
    );
  }
}

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
