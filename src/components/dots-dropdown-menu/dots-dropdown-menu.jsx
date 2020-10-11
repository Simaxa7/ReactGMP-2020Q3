import React from 'react';
import PropTypes from 'prop-types';

import './dots-dropdown-menu.css';
import DotsDropdownDelete from '../dots-dropdown-delete';
import DotsDropdownEdit from '../dots-dropdown-edit';
import ButtonClose from '../button-close';

const DotsDropdownMenu = (props) => {
  const {
    isShowModalDeleteOpen,
    isShowModalEditOpen,
    showDotsDropdownMenu,
    onHideDotsDropdownMenu,
    onShowModalDelete,
    onHideModalDelete,
    onHideModalDeleteAndDel,
    onShowModalEdit,
    onHideModal,
    itemData,
  } = props;

  return (
    <div className="dots-dropdown-menu" role="button">
      <DotsDropdownEdit
        isShowModalEditOpen={isShowModalEditOpen}
        onShowModalEdit={onShowModalEdit}
        onHideModal={onHideModal}
        itemData={itemData}
      />
      <DotsDropdownDelete
        isShowModalDeleteOpen={isShowModalDeleteOpen}
        showDotsDropdownMenu={showDotsDropdownMenu}
        onShowModalDelete={onShowModalDelete}
        onHideModalDelete={onHideModalDelete}
        onHideModalDeleteAndDel={onHideModalDeleteAndDel}
      />
      <ButtonClose
        options={
          {
            classType: 'buttonCloseSmall',
            text: '',
            onClickFunc: onHideDotsDropdownMenu,
          }
        }
      />
    </div>
  );
};

DotsDropdownMenu.propTypes = {
  isShowModalDeleteOpen: PropTypes.bool.isRequired,
  isShowModalEditOpen: PropTypes.bool.isRequired,
  showDotsDropdownMenu: PropTypes.bool.isRequired,
  onHideDotsDropdownMenu: PropTypes.instanceOf(Function).isRequired,
  onShowModalDelete: PropTypes.instanceOf(Function).isRequired,
  onShowModalEdit: PropTypes.instanceOf(Function).isRequired,
  onHideModalDelete: PropTypes.instanceOf(Function).isRequired,
  onHideModalDeleteAndDel: PropTypes.instanceOf(Function).isRequired,
  onHideModal: PropTypes.instanceOf(Function).isRequired,
  itemData: PropTypes.instanceOf(Object).isRequired,
};

export default DotsDropdownMenu;
