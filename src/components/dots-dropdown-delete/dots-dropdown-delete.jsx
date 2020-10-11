import React from 'react';
import PropTypes from 'prop-types';

import './dots-dropdown-delete.css';
import ButtonClose from '../button-close';

const DotsDropdownDelete = (props) => {
  const {
    isShowModalDeleteOpen,
    showDotsDropdownMenu,
    onShowModalDelete,
    onHideModalDelete,
    onHideModalDeleteAndDel,
  } = props;

  return (
    <>
      { showDotsDropdownMenu
        ? (
          <button
            type="button"
            className="dots-dropdown-menu-delete"
            onClick={onShowModalDelete}
          >
            Delete
          </button>
        )
        : null }
      { (showDotsDropdownMenu && isShowModalDeleteOpen)
        ? (
          <div className="dots-dropdown-delete-modal">
            <div className="dots-dropdown-delete-modal-content">
              <div
                className="dots-dropdown-delete-modal-content-title"
              >
                DELETE MOVIE
              </div>
              <div
                className="dots-dropdown-delete-modal-content-description"
              >
                Are you sure you want to delete this movie?
              </div>
              <ButtonClose
                options={
                  {
                    classType: 'buttonCloseDefault',
                    text: '',
                    onClickFunc: onHideModalDelete,
                  }
                }
              />
              <ButtonClose
                options={
                  {
                    classType: 'buttonActionDefault',
                    text: 'CONFIRM',
                    onClickFunc: onHideModalDeleteAndDel,
                  }
                }
              />
            </div>
          </div>
        )
        : null }
    </>
  );
};

DotsDropdownDelete.propTypes = {
  isShowModalDeleteOpen: PropTypes.bool.isRequired,
  showDotsDropdownMenu: PropTypes.bool.isRequired,
  onShowModalDelete: PropTypes.instanceOf(Function).isRequired,
  onHideModalDelete: PropTypes.instanceOf(Function).isRequired,
  onHideModalDeleteAndDel: PropTypes.instanceOf(Function).isRequired,
};

export default DotsDropdownDelete;
