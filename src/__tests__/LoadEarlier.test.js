import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { LoadEarlier } from '../ChatApp';

it('should render <LoadEarlier /> and compare with snapshot', () => {
  const tree = renderer.create(<LoadEarlier />).toJSON();

  expect(tree).toMatchSnapshot();
});
