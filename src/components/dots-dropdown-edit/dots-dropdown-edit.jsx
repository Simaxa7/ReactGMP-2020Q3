import React from 'react';
import PropTypes from 'prop-types';

import './dots-dropdown-edit.css';
import FormItem from '../form-item';
import ButtonClose from '../button-close';

const DotsDropdownEdit = (props) => {
  const {
    isShowModalEditOpen,
    onShowModalEdit,
    onHideModal,
    itemData,
  } = props;

  return (
    <>
      { isShowModalEditOpen
        ? (
          <div className="show-modal">
            <div className="show-modal-content">
              <div className="show-modal-content-title">
                EDIT MOVIE
              </div>
              <FormItem
                type="editItem"
                options={{ ...itemData }}
              />
              <ButtonClose
                options={
                  {
                    type: 'buttonCloseDefault',
                    text: '',
                    onClickFunc: onHideModal,
                  }
                }
              />
            </div>
          </div>
        )
        : (
          <button
            type="button"
            className="dots-dropdown-menu-edit"
            onClick={onShowModalEdit}
          >
            Edit
          </button>
        )}
    </>
  );
};

DotsDropdownEdit.propTypes = {
  isShowModalEditOpen: PropTypes.bool.isRequired,
  onShowModalEdit: PropTypes.instanceOf(Function).isRequired,
  onHideModal: PropTypes.instanceOf(Function).isRequired,
  itemData: PropTypes.instanceOf(Object).isRequired,
};

export default DotsDropdownEdit;
