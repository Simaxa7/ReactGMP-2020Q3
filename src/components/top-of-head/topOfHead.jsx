import React from 'react';
import PropTypes from 'prop-types';

import './topOfHead.css';
import AppLogo from '../app-logo';
import ItemAdd from '../item-add/item-add';
import SearchPanel from '../search-panel';

function TopOfHead(props) {
  const { onChangeItem } = props;
  return (
    <div className="wrap-large topOfHead">
      <div className="d-flex-between">
        <AppLogo />
        <ItemAdd
          onChangeItem={onChangeItem}
        />
      </div>
      <div className="topOfHead-search">
        <h2 className="topOfHead-search-title">FIND YOUR MOVIE</h2>
        <SearchPanel />
      </div>
    </div>
  );
}

TopOfHead.propTypes = {
  onChangeItem: PropTypes.instanceOf(Function).isRequired,
};

export default TopOfHead;
