import React, { Component } from 'react';

import './item-add.css';
import ButtonClose from '../button-close';
import FormItem from '../form-item';

class ItemAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
    };
    this.onShowModal = this.onShowModal.bind(this);
    this.onHideModal = this.onHideModal.bind(this);
  }

  onShowModal() {
    document.body.classList.add('modal-open');
    this.setState({
      isShowModal: true,
    });
  }

  onHideModal() {
    document.body.classList.remove('modal-open');
    this.setState({
      isShowModal: false,
    });
  }

  render() {
    const {
      isShowModal,
    } = this.state;

    return (
      <>
        { isShowModal
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
                      onClickFunc: this.onHideModal,
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
              onClick={this.onShowModal}
            >
              +ADD MOVIE
            </button>
          )}
      </>
    );
  }
}

export default ItemAdd;
