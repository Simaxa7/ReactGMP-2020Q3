import React, { useState } from 'react';

import './item-add.css';
import ButtonClose from '../button-close';
import FormItem from '../form-item';

const ItemAdd = () => {
  const [modalAdd, setModalAdd] = useState(false);
  const showModalAdd = () => setModalAdd(true);
  const hideModalAdd = () => setModalAdd(false);

  function onShowModal() {
    document.body.classList.add('modal-open');
    showModalAdd();
  }

  function onHideModal() {
    document.body.classList.remove('modal-open');
    hideModalAdd();
  }

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
