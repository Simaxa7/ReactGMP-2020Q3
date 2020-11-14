import React from 'react';
import renderer from 'react-test-renderer';

import ButtonClose from '../src/components/button-close';

it('renders correctly 1', () => {
  const options = {
    classType: 'buttonCloseDefault',
    text: 'close',
    type: 'button',
  };

  const tree = renderer
    .create(<ButtonClose options={options} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly 2', () => {
  const options = {
    classType: 'buttonActionDefault',
    text: 'action',
  };

  const tree = renderer
    .create(<ButtonClose options={options} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
