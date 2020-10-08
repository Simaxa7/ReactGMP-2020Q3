import React, { useState } from 'react';

import './item-add.css';
import ButtonClose from '../button-close';
import FormItem from '../form-item';

// eslint-disable-next-line

const ItemAdd = () => {
  const [modalAdd, setModalAdd] = useState(false);
  const showModalAdd = () => setModalAdd(true);
  const hideModalAdd = () => setModalAdd(false);

  const onShowModal = () => {
    document.body.classList.add('modal-open');
    showModalAdd();
  };

  const onHideModal = () => {
    document.body.classList.remove('modal-open');
    hideModalAdd();
  };

  return (
    <>
      { modalAdd
        ? (
          <div className="show-modal">
            <div className="show-modal-content">
              <div className="show-modal-content-title">
                ADD MOVIE
              </div>
              <FormItem
                type="addItem"
                onHideModal={onHideModal}
              />
              <ButtonClose
                options={
                  {
                    classType: 'buttonCloseDefault',
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
            className="item-add"
            type="button"
            onClick={onShowModal}
          >
            +ADD MOVIE
          </button>
        )}
    </>
  );
};

export default ItemAdd;
