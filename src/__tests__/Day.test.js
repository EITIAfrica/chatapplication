import 'react-native';
import React from 'react';
import createComponentWithContext from '../../tests/context';

import { Day } from '../ChatApp';

it('should render <Day /> and compare with snapshot', () => {
  const component = createComponentWithContext(<Day />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
