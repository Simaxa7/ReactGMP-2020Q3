import React, { useState } from 'react';

import './item-add.css';
import ButtonClose from '../button-close';
import FormItem from '../form-item';

// eslint-disable-next-line
const mockItem = {
  budget: 20000000,
  genres: ['Comedy', 'Documentary', 'Action'],
  id: 16290,
  overview: 'Jackass 3D is a 3-D film and the third movie of the Jackass serie',
  poster_path:
    'https://image.tmdb.org/t/p/w500/5j9VFEVjYn0FtqZGqDcmMPYSVoY.jpg',
  release_date: '2010-10-15',
  revenue: 117224271,
  runtime: 94,
  tagline: 'Dont try this at home',
  title: 'Jackass 3D',
  vote_average: 6.4,
  vote_count: 509,
};

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
